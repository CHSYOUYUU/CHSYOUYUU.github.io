#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 提交
git init
git add -A
git commit -m 'deploy'

# 请将后面的链接和对应的分支替换成你的仓库以及对应分支，可以在仓库的SSH拉取处获取。
git push -f git@github.com:CHSYOUYUU/CHSYOUYUU.github.io.git master:pages

cd -