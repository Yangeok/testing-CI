const Router = require('koa-router');
const blog = new Router();
const blogCtrl = require('./blog.controller');

blog.get('/', blogCtrl.list);

module.exports = blog;
