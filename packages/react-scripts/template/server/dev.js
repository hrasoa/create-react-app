const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const app = express();

module.exports = (compiler, serverConfig) => {
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotServerMiddleware(compiler));
  return app;
};
