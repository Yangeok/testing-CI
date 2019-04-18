const Router = require('koa-router');
const youtube = new Router();
const youtubeCtrl = require('./youtube.controller');

youtube.get('/:page/:limit', youtubeCtrl.list);
youtube.get('/feed/:page/:limit', youtubeCtrl.feeds);

module.exports = youtube;
