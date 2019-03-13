const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const json = require('koa-json');
const bodyParser = require('koa-body');

const app = new Koa();
const router = new Router();

const api = require('./routes/index');
router.use(api.routes());

app
  .use(json())
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`> Koa server is running on port ${PORT}`);
});
