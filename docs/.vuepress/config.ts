import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),

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
    sidebar: {
        '/pages/BlogBuild/':[
            {
                text:'博客搭建',
                //prefix:'',
                collapsible:false,
                children:[
                    '','BlogBuild01',
                ],
            }
        ],
        '/pages/CSharp/':[
            {
                text:'C#',
                collapsible:false,
                children:[
                    '','CSharp01',
                ],
            }
        ],
        '/pages/Unity/':[
            {
                text:'Unity',
                collapsible:false,
                children:[
                    '','Unity01',
                ],
            }
        ],
    }
  }),


})

