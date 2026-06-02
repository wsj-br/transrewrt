declare module "*.css";

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare const __REPO_URL__: string | undefined;
declare const __APP_VERSION__: string | undefined;
declare const __APP_DESCRIPTION__: string | undefined;
declare const __APP_AUTHOR__: string | undefined;
declare const __APP_LICENSE__: string | undefined;
declare const __DEV__: boolean | undefined;

interface RequireContext {
  keys(): string[];
  (id: string): string;
  resolve(id: string): string;
  id: string;
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
    mode?: string,
  ): RequireContext;
}

declare const require: NodeRequire;

interface NodeModule {
  hot?: {
    accept(path?: string, callback?: () => void): void;
    accept(callback?: () => void): void;
  };
}

declare const module: NodeModule;
