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