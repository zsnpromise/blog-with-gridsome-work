// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '阿南的博客',
  icon: '/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './posts/**/*.md',
        typeName: 'markdownPost',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts', 'tags'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiPosts: [
      {
        path: '/post/:id',
        component: './src/templates/post.vue'
      }
    ],
    StrapiTags: [
      {
        path: '/tag/:id',
        component: './src/templates/tag.vue'
      }
    ]
  },
}
