/**
 * Created by YuKai Fan on 2019/12/20
 */
module.exports = {
  apiUrl: {
    //  本地环境接口请求地址
    dev: 'http://47.104.29.22:8088',
    //  生产环境接口请求地址
    pro: ''
  },

  INDEX_PAGE: 'index',

  proxyTable: {
    '/api': {
      target: 'http://127.0.0.1:8080',
      timeout: 6 * 60 * 10000,		// 设置超时
      changeOrigin: true
    }

  }
}
