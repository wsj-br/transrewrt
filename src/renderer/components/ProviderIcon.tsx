import PropTypes from 'prop-types';
import iconData from '../assets/icons_with_files.json';

// Normalize string: lowercase, remove all non-alphanumeric
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

// Build map: normalized provider_id -> icon filename (with .ico)
const providerIdToFile = {};
iconData.forEach(entry => {
  if (entry.iconFile) {
    const norm = normalize(entry.provider_id);
    // Keep the first mapping for each normalized key
    if (!providerIdToFile[norm]) {
      providerIdToFile[norm] = entry.iconFile;
    }
  }
});

// Require all .ico files from assets folder directly
const iconContext = require.context('../assets', false, /\.ico$/);
const fileToUrl = {};
iconContext.keys().forEach(key => {
  // key is like './ai21.ico'
  const file = key.replace(/^\.\//, ''); // 'ai21.ico'
  fileToUrl[file] = iconContext(key);
});

// In-memory cache: provider -> resolved URL (avoids re-resolving and helps browser cache)
const urlCache = new Map();

function resolveIconUrl(provider) {
  const rawProvider = String(provider || "").trim();
  const normProvider = normalize(rawProvider);
  const firstSegment = rawProvider.includes("/") ? rawProvider.split("/")[0] : "";
  const normFirstSegment = normalize(firstSegment);

  const candidates = [
    rawProvider,
    normProvider,
    firstSegment,
    normFirstSegment,
  ].filter(Boolean);

  for (const candidate of candidates) {
    const file = providerIdToFile[candidate];
    if (file && fileToUrl[file]) {
      return fileToUrl[file];
    }
  }

  for (const candidate of candidates) {
    if (fileToUrl[candidate]) {
      return fileToUrl[candidate];
    }
  }
  return null;
}

function getIconUrl(provider) {
  const cached = urlCache.get(provider);
  if (cached !== undefined) return cached;
  const url = resolveIconUrl(provider);
  urlCache.set(provider, url);
  return url;
}

export function preloadProviderIcons() {
  const urls = new Set(Object.values(fileToUrl));
  urls.forEach((url) => {
    const img = new Image();
    img.src = url as string;
  });
}

const ProviderIcon = ({ provider, size = 16 }) => {
  const src = getIconUrl(provider);

  if (src) {
    return (
      <img
        src={src}
        alt={provider}
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
      />
    );
  }

  // Fallback to generic robot emoji
  const fontSize = size === 20 ? '20px' : '16px';
  return <span style={{ fontSize, lineHeight: 1 }}>🤖</span>;
};

ProviderIcon.propTypes = {
  provider: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default ProviderIcon;
