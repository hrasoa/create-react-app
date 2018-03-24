import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

export default function serverRenderer() {
  return (req, res) => {
    res.status(200).send(`
      <!doctype html>
        <html>
        <head>
            <title>App</title>
        </head>
        <body>
          <div id="root">
            ${renderToString(<App />)}
          </div>
        </body>
      </html>
    `);
    res.end();
  };
}
