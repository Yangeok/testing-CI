const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const json = require('koa-json');
const logger = require('koa-logger');
const bodyParser = require('koa-body');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

const api = require('./routes/index');
router.use(api.routes());

app
  .use(json())
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3001;
const db = require('./db');
app.listen(PORT, () => {
  console.log(`> Koa server is running on port ${PORT}`);
  db();
});
