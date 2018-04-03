import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import App from './app';
const fs = eval('require')('fs');

function renderIndex() {
  const context = {};
  const appHtml = ReactDOMServer.renderToString((
    <StaticRouter location="/" context={context}>
      <App/>
    </StaticRouter>
  ));
  return `
    <link href="root.css" rel="stylesheet">
    <div id="root">${appHtml}</div>
    <script src="root.js"></script>
  `;
}

const indexHtml = renderIndex();
fs.writeFileSync('./build/index.html', indexHtml);
console.log(`Wrote ${indexHtml.length} bytes`);
