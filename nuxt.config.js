module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'coc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    {
      src: 'normalize.css/normalize.css'
    },
    {
      src: 'element-ui/lib/theme-chalk/index.css'
    },
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'element-ui',
    ],
    loaders: [],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('autoprefixer')(),
    ],
  },
  plugins: [
    { src: '~plugins/element-ui' },
  ],
}
