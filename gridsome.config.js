// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost', // 转换成 GraphQL 后的数据类型
        path: './content/blog/**/*.md', // 文件的路径
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: 'http://117.50.95.2:1337',
        contentTypes: ['post', 'tag'], // 查询的数据类型
        queryLimit: 1000, // Defaults to 100
        singleTypes: ['general'], // 单个节点
        // loginData: {
        //   identifier: 'zlm',
        //   password: '123456'
        // }
      }
    }
  ],
  transformer: {
    remark: {}
  },
  templates: {
    Post: [
      { // 配置具体规则  类似路由
        path: '/post/:id', // 这个 id 是在 gridsome.server.js 节点中添加的真实有效的数据
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
