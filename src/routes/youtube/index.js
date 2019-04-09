const Router = require('koa-router');
const youtube = new Router();
const youtubeCtrl = require('./youtube.controller');

youtube.get('/', youtubeCtrl.list);
youtube.post('/', youtubeCtrl.create);
youtube.put('/', youtubeCtrl.modify);

module.exports = youtube;
