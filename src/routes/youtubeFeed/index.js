const Router = require('koa-router');
const youtubeFeed = new Router();
const youtubeFeedCtrl = require('./youtubeFeed.controller');

youtubeFeed.get('/', youtubeFeedCtrl.list);

module.exports = youtubeFeed;
