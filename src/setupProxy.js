const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://live-calls-network.trackdrive.com/api/v1/',
      changeOrigin: true,
    })
  );

  app.use(
    '/google-script',
    createProxyMiddleware({
      target: 'https://script.google.com/macros/s/AKfycbxwmL0ufihheJn-JUuPlsAP_dNCmt9t3KDvitMe2UvLLQZb0Bm04iC8YP_3t-4ass5fwg',
      changeOrigin: true,
      
    })
  );
};

