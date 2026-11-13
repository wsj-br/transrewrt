#!/bin/sh
# Git credential prompt helper. Git calls this with the prompt as $1.
# Username is the GitHub token user; the password is GITHUB_TOKEN.
# The token is never written into the remote URL.
case "$1" in
  *[Uu]sername*) printf '%s\n' "x-access-token" ;;
  *) printf '%s\n' "${GITHUB_TOKEN:-}" ;;
esac
