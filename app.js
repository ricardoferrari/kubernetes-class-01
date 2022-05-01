const express = require('express');
const os = require('os');

const app = express();

app.get('/', (_req, res) => {
  const networkInterfaces = os.networkInterfaces();

  res.send(`
    <h1>Hello from this NodeJS app! ${JSON.stringify(networkInterfaces)}</h1>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (_req, _res) => {
  process.exit(1);
});

app.listen(8080);
