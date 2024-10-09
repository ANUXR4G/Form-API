const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://live-calls-network.trackdrive.com/api/v1/',
      changeOrigin: true,
    })
  );
};

