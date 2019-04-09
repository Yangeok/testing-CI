const Router = require('koa-router');
const router = new Router();

const blog = require('./blog');
const blogFeed = require('./blogFeed');
const youtube = require('./youtube');
const youtubeFeed = require('./youtubeFeed');

router
  .use('/blog', blog.routes())
  .use('/blog/feed', blogFeed.routes())
  .use('/youtube', youtube.routes())
  .use('/youtube/feed', youtubeFeed.routes());

module.exports = router;
