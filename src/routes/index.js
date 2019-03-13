const Router = require('koa-router');
const router = new Router();

const blog = require('./blog');
const youtube = require('./youtube');

router.use('/blog', blog.routes()).use('/youtube', youtube.routes());

module.exports = router;
