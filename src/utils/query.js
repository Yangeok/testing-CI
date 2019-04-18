const Blog = require('../db/models/blog');
const BlogFeeds = require('../db/models/blogFeeds');

exports.getBlogAuthors = async () => {
  const data = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  return data;
};

exports.getBlogFeeds = async ctx => {
  const options = {
    page: ctx.params.page || 1,
    limit: ctx.params.limit || 100,
    sort: { pubDate: 'desc' }
  };

  const aggregate = BlogFeeds.aggregate();
  const data = await BlogFeeds.aggregatePaginate(aggregate, options);
  return data;
};
