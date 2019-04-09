const Blog = require('../../db/models/blog');
const { parseBlog } = require('../../services/parseYaml');

exports.list = async ctx => {
  const blogs = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = blogs;
};
