const path = require('path');
const express = require('express');
const paths = require('../../config/paths');
const stats = require(path.join(paths.appBuild, 'compilation-stats.json'));
const render = require(path.join(paths.appBuild, 'server-render')).default;

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();
app.use(express.static(paths.appBuild));
app.use(render({ clientStats: stats }));
app.listen(DEFAULT_PORT, HOST, () => {
  console.log('Production server is listening.\n');
});
