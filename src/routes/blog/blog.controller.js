const Blog = require('../../db/models/blog');
const BlogFeeds = require('../../db/models/blogFeeds');

exports.list = async ctx => {
  const data = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = data;
};

exports.feeds = async ctx => {
  const pageSize = 25;
  const page = ctx.request.query.page || 1;
  const limit = ctx.request.query.limit || pageSize;

  const options = {
    page: page,
    limit: limit,
    sort: { pubDate: 'desc' }
  };
  try {
    const aggregate = BlogFeeds.aggregate();
    const data = await BlogFeeds.aggregatePaginate(aggregate, options);
    ctx.body = { success: true, data: data };
  } catch (e) {
    ctx.status = 400;
    ctx.body = { success: false, message: e.message };
  }
};
