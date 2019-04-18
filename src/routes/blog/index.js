const Router = require('koa-router');
const blog = new Router();
const blogCtrl = require('./blog.controller');

blog.get('/:page/:limit', blogCtrl.list);
blog.get('/feed/:page/:limit', blogCtrl.feeds);

module.exports = blog;
