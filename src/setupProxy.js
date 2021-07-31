const createProxyMiddleware = require('http-proxy-middleware');

console.log(createProxyMiddleware);

module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
          '^/auth': '/'
      }
    })
  );
};