require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyMiddleware = createProxyMiddleware({
  target: 'https://solana--mainnet.datahub.figment.io/',
  changeOrigin: true,
  headers: {
    Authorization: process.env.FIGMENT_TOKEN,
  },
});

const app = express();
app.use('/', proxyMiddleware);
app.listen(process.env.PORT || 8080);
