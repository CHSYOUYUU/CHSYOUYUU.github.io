# 搭建流程
[[toc]]

## 前置准备
### Node.js与npm
安装 [Node](https://nodejs.org/zh-cn/download/prebuilt-installer) 的同时也会安装npm。

VuePress需要的node版本为Node.js v18.19.0+，
如果版本不对记得对Node更新。

如果没怎么接触过web前端，推荐用安装包的方式傻瓜式安装Node。

### Github Account

要想在Github上部署当然还需要一个Github的账号，都看到这篇文章应该都有吧？没有的话可以在 [Github](https://github.com/signup) 注册。

### 检查
可以在命令行输入以下代码查看安装情况，显示为符合需求的版本即完成：
```
node -v
```

## 基本流程
### Pages
通过GitHub的 [Pages快速入门](https://docs.github.com/zh/pages/quickstart) 可以创建对应的仓库，后续就以此建立博客。

### VuePress
* 根据 [VuePress快速上手](https://vuepress.vuejs.org/zh/guide/getting-started.html) 步骤完成项目的创建。
  * 在对应目录下创建VuePress项目推送，这样需要添加SSH密钥，可以参考 [**github的ssh push**](../#github%E7%9A%84ssh-push) 的方式推送到你对应的Pages仓库。
  * 如果选择拉取对应的Pages仓库再添加VuePress可以从安装 VuePress这一步开始。
  * 请务必根据对应的目录格式创建，可以参考[**参考文章**](../#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0) 目录样式。
* 完成VuePress项目的创建后可以根据快速入门的 [**开始使用vuepress**](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%90%AF%E5%8A%A8%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1%E5%99%A8)
步骤执行对应指令启动开发服务器，看看对应的效果。
  ```
  npm run docs:dev
  ```

### 构建并部署
* 构建
  * 执行对应的命令即可完成构建。
    ```
    npm run docs:build
    ```
  * 执行完会在 **docs/.vuepress/dist** 目录中可以找到构建生成的静态文件。
* 部署到Github
  * 在Page项目新开一个分支用于部署，我这里命名为 **pages**。
  * 将构建好的静态文件上传到对应的分支。
    * 
  * 设置仓库的Pages主页。
  * 打开对应的网页查看部署情况。

## 踩坑回顾
### GitHub开启Pages
### 项目目录与路由关系
### 项目部署与deploy.sh
### github的ssh push
### 参考文章
* <https://github.com/mqyqingfeng/Blog/issues/235>
* <https://juejin.cn/post/6844903999129436174>
* <https://leoleor.github.io/Lion_Blog/articles/site/githubPages.html>
