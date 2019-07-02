const Blog = require('../db/models/blog');
const BlogFeeds = require('../db/models/blogFeeds');
const Youtube = require('../db/models/youtube');
const YoutubeFeeds = require('../db/models/youtubeFeeds');

exports.getBlogAuthors = async ctx => {
  let options = {
    page: ctx.params.page || 1,
    limit: ctx.params.limit || 100,
    select: 'name url desc',
    sort: { name: 'asc' }
  };

  const aggregate = Blog.aggregate();
  const data = await Blog.aggregatePaginate(aggregate, options);
  // const data = await Blog.find()
  //   .select('name url desc')
  //   .sort({ name: 'asc' });
  return data;
};

exports.getYoutubeAuthors = async ctx => {
  let options = {
    page: ctx.params.page || 1,
    limit: ctx.params.limit || 100,
    select: 'name url desc',
    sort: { name: 'asc' }
  };

  const aggregate = Youtube.aggregate();
  const data = await Youtube.aggregatePaginate(aggregate, options);
  // const data = await Youtube.find()
  //   .select('name url desc')
  //   .sort({ name: 'asc' });
  return data;
};

exports.getBlogFeeds = async ctx => {
  let options = {
    page: ctx.params.page || 1,
    limit: ctx.params.limit || 100,
    sort: { pubDate: 'desc' }
  };

  const aggregate = BlogFeeds.aggregate();
  const data = await BlogFeeds.aggregatePaginate(aggregate, options);
  return data;
};

exports.getYoutubeFeeds = async ctx => {
  let options = {
    page: ctx.params.page || 1,
    limit: ctx.params.limit || 100,
    sort: { pubDate: 'desc' }
  };

  const aggregate = YoutubeFeeds.aggregate();
  const data = await YoutubeFeeds.aggregatePaginate(aggregate, options);
  return data;
};
