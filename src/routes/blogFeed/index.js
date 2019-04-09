const Router = require('koa-router');
const blogFeed = new Router();
const blogFeedCtrl = require('./blogFeed.controller');

blogFeed.get('/', blogFeedCtrl.list);
module.exports = blogFeed;
