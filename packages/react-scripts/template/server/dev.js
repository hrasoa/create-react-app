const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const app = express();

module.exports = (compiler, serverConfig) => {
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(
    webpackHotMiddleware(
      compiler.compilers.find(compiler => compiler.name === 'client')
    )
  );
  app.use(webpackHotServerMiddleware(compiler));
  return app;
};
