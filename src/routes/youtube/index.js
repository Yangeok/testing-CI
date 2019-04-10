const Router = require('koa-router');
const youtube = new Router();
const youtubeCtrl = require('./youtube.controller');

youtube.get('/', youtubeCtrl.list);
youtube.get('/feed', youtubeCtrl.feeds);

module.exports = youtube;
