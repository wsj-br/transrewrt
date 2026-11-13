const { describe, it, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const { githubRemoteUrl } = require("./gitSync.js");

const saved = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  PRESET_CHECK_GITHUB_SSH: process.env.PRESET_CHECK_GITHUB_SSH,
};

function restoreEnv() {
  if (saved.GITHUB_TOKEN === undefined) delete process.env.GITHUB_TOKEN;
  else process.env.GITHUB_TOKEN = saved.GITHUB_TOKEN;
  if (saved.PRESET_CHECK_GITHUB_SSH === undefined) delete process.env.PRESET_CHECK_GITHUB_SSH;
  else process.env.PRESET_CHECK_GITHUB_SSH = saved.PRESET_CHECK_GITHUB_SSH;
}

describe("githubRemoteUrl", () => {
  afterEach(restoreEnv);

  it("keeps the https remote free of a token", () => {
    delete process.env.PRESET_CHECK_GITHUB_SSH;
    process.env.GITHUB_TOKEN = "ghp_from_env";
    const url = githubRemoteUrl({
      owner: "wsj-br",
      repo: "transrewrt",
      token: "ghp_secret",
      useSsh: false,
    });
    assert.equal(url, "https://github.com/wsj-br/transrewrt.git");
    assert.equal(url.includes("ghp_secret"), false);
    assert.equal(url.includes("ghp_from_env"), false);
  });

  it("ignores PRESET_CHECK_GITHUB_SSH", () => {
    process.env.PRESET_CHECK_GITHUB_SSH = "1";
    const url = githubRemoteUrl({
      owner: "wsj-br",
      repo: "transrewrt",
      useSsh: false,
    });
    assert.equal(url, "https://github.com/wsj-br/transrewrt.git");
  });

  it("uses the ssh remote when useSsh is set", () => {
    delete process.env.PRESET_CHECK_GITHUB_SSH;
    const url = githubRemoteUrl({
      owner: "wsj-br",
      repo: "transrewrt",
      token: "ghp_secret",
      useSsh: true,
    });
    assert.equal(url, "git@github.com:wsj-br/transrewrt.git");
  });
});
