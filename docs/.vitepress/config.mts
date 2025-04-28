import { defineConfig } from 'vitepress'

import pkg from '../../package.json'
import data from '../../data.json'

export default defineConfig({
  lang: "zh-CN",
  title: "NekoByte",
  description: "NekoByte 官网",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["script", { async: "", src: "/m.js" }]
  ],
  ignoreDeadLinks: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://nekobyte.top",
  },
  themeConfig: {
    logo: { src: "/logo.png"},
    nav: [
      { text: "主页", link: "/" },
      {
        text: "关于",
        items: [
          { text: "隐私政策", link: "/about/privacy-policy" },
          { text: "免责声明", link: "/about/disclaimers" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/NekoByteTeam/www_nekobyte_top",
      text: "向我们反馈问题",
    },
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) {
            return "";
          }
          return html;
        },
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      },
    },
    externalLinkIcon: true, // 展示站外链接箭头 ↗
    // 下方是文档中文适配内容
    footer: {
      message: `<a href="https://icp.gov.moe/?keyword=${data.icp.number}">萌ICP备${data.icp.number}号</a>`,
      copyright: `版权所有 © 2022-${new Date().getFullYear()} NekoByte`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-inline-link-preview',
        '@nolebase/vitepress-plugin-index',
        '@nolebase/ui'
      ],
    },
  },
});