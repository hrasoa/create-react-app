const path = require('path');
const express = require('express');
const stats = require('../build/compilation-stats.json');
const render = require('../build/server-render').default;

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(render({ clientStats: stats }));
app.listen(DEFAULT_PORT, HOST, () => {
  console.log('Production server is listening.\n');
});
