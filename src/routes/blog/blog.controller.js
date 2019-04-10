const Blog = require('../../db/models/blog');
const BlogFeeds = require('../../db/models/blogFeeds');

exports.list = async ctx => {
  const data = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = data;
};

exports.feeds = async ctx => {
  const data = await BlogFeeds.find()
    .select('-_id')
    .sort({ pubDate: 'desc' });
  ctx.body = data;
};
