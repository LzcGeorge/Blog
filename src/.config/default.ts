import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '自我认知',
    subtitle: 'Selfknow',
    author: 'George Lna',
    description: 'Rediscover the beauty of mine',
    website: 'https://astro-theme-typography.vercel.app/',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/LzcGeorge/',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },

    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    // 分类的 URL 映射表
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
    footer: [
      'Est. 2023 | Still Growing ',
      '© %author',
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
  rss: {
    fullText: false,
  },

  comment: {
    giscus: {
      repo: 'LzcGeorge/blog_comment',
      repoId: 'R_kgDOK9wGgg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOK9wGgs4CcABG',
      mapping: 'og:title',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'light',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '18b42424-b309-4822-872b-36cf60b1d214',
  },
  latex: {
    katex: true,
  },
}
