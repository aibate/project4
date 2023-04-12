#!/usr/bin/env bash

source $(brew --prefix asdf)/libexec/asdf.sh

set -euo pipefail

echo "+++ Running Tests"
echo
cd client
npm install
npm run build
npm test
