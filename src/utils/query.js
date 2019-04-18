const Blog = require('../db/models/blog');
const BlogFeeds = require('../db/models/blogFeeds');
const Youtube = require('../db/models/youtube');
const YoutubeFeeds = require('../db/models/youtubeFeeds');

exports.getBlogAuthors = async () => {
  const data = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  return data;
};

exports.getYoutubeAuthors = async () => {
  const data = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  return data;
};

exports.getBlogFeeds = async ctx => {
  let options = {
    page: ctx.params.page || 1,
    limit: ctx.params.limit || 100,
    sort: { pubDate: 'desc' }
  };

  const aggregate = YoutubeFeeds.aggregate();
  const data = await YoutubeFeeds.aggregatePaginate(aggregate, options);
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
