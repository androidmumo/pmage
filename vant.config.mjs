export default {
  name: 'pmage',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/pmage/',
    },
    packageManager: 'yarn',
  },
  site: {
    title: 'pmage',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'pmage',
            title: '图片渐进加载',
          },
        ],
      },
    ],
  },
};
