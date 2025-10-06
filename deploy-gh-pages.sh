#!/usr/bin/env bash
set -euo pipefail

# --- clean previous artifacts ---
rm -rf dist gh-pages || true
git worktree prune
git branch -D gh-pages 2>/dev/null || true

# --- build ---
npm run build

# --- cache-bust assets in built HTML ---
ver=$(date +%s)
# (On macOS use: sed -i '' ...)
sed -i "s/\.css\"/.css?v=${ver}\"/; s/\.js\"/.js?v=${ver}\"/" dist/index.html

# --- SPA fallbacks for GH Pages ---
cp dist/index.html dist/404.html
touch dist/.nojekyll

# --- publish to gh-pages branch via worktree ---
git worktree add gh-pages
rm -rf gh-pages/*
cp -r dist/* gh-pages/
cd gh-pages
git add -A
git commit -m "deploy: $(date -u +'%Y-%m-%d %H:%M:%S') UTC (v=${ver})"
git push origin HEAD:gh-pages
cd ..
git worktree remove gh-pages

echo "✅ Deployed to GitHub Pages with cache busting (?v=${ver})."
echo "🔗 Open: https://cryptomachinegene.github.io/portfolio-starter/#/?v=${ver}"
