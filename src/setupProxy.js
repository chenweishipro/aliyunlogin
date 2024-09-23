const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/foo',
    createProxyMiddleware({
      target: 'http://localhost:7788',
      changeOrigin: true,
      pathRewrite: {
        '^/foo': ''
      }
    })
  )
}