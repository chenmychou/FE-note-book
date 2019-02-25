module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.zouzhengming.com', //对应自己的接口
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}
module.exports = {
  chainWebpack: config => {
   config.module
    .rule('scss')
    .use('sass-loader')
    .tap(options =>
     merge(options, {
      includePaths: [path.resolve(dirname, 'node_modules')],
     })
    )
  }
 }
module.exports = {
  // ...
  css: {
    extract: true,
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_variable.scss";
        `
      }
    }
  }
}
module.exports = {
  devServer: {
   proxy: {
    '/api': {
     target: 'http://api.zouzhengming.com',
     ws: true,
     changeOrigin: true
    }
   }
  }
 }