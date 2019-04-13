const Youtube = require('../../db/models/youtube');
const YoutubeFeeds = require('../../db/models/youtubeFeeds');

exports.list = async ctx => {
  const youtube = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = youtube;
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
    const aggregate = YoutubeFeeds.aggregate();
    const data = await YoutubeFeeds.aggregatePaginate(aggregate, options);
    ctx.body = { success: true, data: data };
  } catch (e) {
    ctx.status = 400;
    ctx.body = { success: false, message: e.message };
  }
};
