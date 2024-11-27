# 博客优化
[[toc]]

## 默认主题设置
* 默认主题的设置覆盖了大部分需要的内容，可以先查看一下 [官网的指引](https://ecosystem.vuejs.press/zh/themes/default/)。
* 我主要用到了其中的一部分，会在下面列出参考，具体有待你去发现尝试。

## 修改默认首页
* 主页顶部的设置可以参考默认主题 [官网](https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html#%E9%A6%96%E9%A1%B5)
* 这是我的设置，仅供参考
  ```md
  ---
  home: true
  heroImage: /Avatar.png
  heroText: 一罐酱油
  tagline: 本人是Unity前端开发工程师，本博客用于记录回顾Unity相关知识。
  title: 一罐酱油

  actions:
  - text: 搭建博客
    link: /pages/BlogBuild/
    type: primary
  - text: C#知识分享
    link: /pages/CSharp/
    type: primary
  - text: Unity知识分享
    link: /pages/Unity/
    type: primary

  features:
  - title: 博客搭建
    details: 授人以鱼不如授人以渔，这是一个基于GitHub和VuePress搭建的个人博客，简单讲述一下搭建的流程。
  - title: C#知识分享
    details: 工欲善其事，必先利其器。要想读懂源码，了解框架的精巧设计，C#的知识积累必不可少。
  - title: Unity知识分享
    details: 知其然，知其所以然。只有更深入了解了Unity，才能够更熟练的使用Unity。    
  ```

## 设置顶部状态栏
* 顶部路由设置可以参考默认主题官网的 [navbar](https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html#navbar) 实例1和2
  ```typescript
  theme: defaultTheme({
    lang: 'zh-CN',
    title: '一罐酱油',
    description: '一罐酱油的博客',
    head: [['link', { rel: 'icon', href: '/Avatar.png' }]],
    logo: '/Avatar.png',
    subSidebar: 'auto',
    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', children: [
        {
           text:'博客搭建',
           link:'/pages/BlogBuild/',
           activeMatch:'/',
        },
      ]},
    ],
  })
  ```

## 添加左侧目录
* 顶部路由设置可以参考默认主题官网的 [sidebar](https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html#sidebar) 实例2
  ```typescript
  theme: defaultTheme({
     sidebar: {
        '/pages/BlogBuild/':[
            {
                text:'博客搭建',
                collapsible:false,
                children:[
                    '','BlogBuild01',
                ],
            }
        ],
     }
  })
  ```
