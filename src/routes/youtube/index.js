const Router = require('koa-router');
const youtube = new Router();
const youtubeCtrl = require('./youtube.controller');

youtube.get('/', youtubeCtrl.list);

module.exports = youtube;
