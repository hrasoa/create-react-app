import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

function normalizeAssets(assets) {
  return Array.isArray(assets) ? assets : [assets];
}

export default function serverRenderer({ clientStats }) {
  return (req, res) => {
    const { assetsByChunkName, publicPath } = clientStats;
    res.status(200).send(`
      <!doctype html>
        <html>
        <head>
          <title>App</title>
          ${normalizeAssets(assetsByChunkName.main)
            .filter(path => path.endsWith('.css'))
            .map(
              path => `<link rel="stylesheet" href="${publicPath}${path}" />`
            )
            .join('\n')}
        </head>
        <body>
          <div id="root">
            ${renderToString(<App />)}
          </div>
          ${normalizeAssets(assetsByChunkName.main)
            .filter(path => path.endsWith('.js'))
            .map(path => `<script src="${publicPath}${path}"></script>`)
            .join('\n')}
        </body>
      </html>
    `);
    res.end();
  };
}
