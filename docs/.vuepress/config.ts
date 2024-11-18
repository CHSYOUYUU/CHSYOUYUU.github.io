import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),

  theme: defaultTheme({
    lang: 'zh-CN',
    title: '一罐酱油',
    //description: '描述',
    head: [['link', { rel: 'icon', href: '/icon.png' }]],
    logo: '/icon.png',
    subSidebar: 'auto',
    navbar: [
        { text: '首页', link: '/' },
        { text: '博客', children: [
            {
                text:'博客搭建',
                link:'/pages/BlogBuild/',
                activeMatch:'/',
            },
            {
                text:'C#',
                link:'/pages/CSharp/',
                activeMatch:'/',
            },
            {
                text:'Unity',
                link:'/pages/Unity/',
                activeMatch:'/',
            },
        ]},
        { text: 'Github', link: 'https://github.com/CHSYOUYUU' },
    ],
    sidebar: [
        {
            title: '欢迎学习',
            path: '/',
            collapsable: true,
            children: [
                { title: "学前必读", path: "/" }
            ]
        },
    ]
    }),


})

