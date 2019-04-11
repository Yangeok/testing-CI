const Youtube = require('../../db/models/youtube');
const YoutubeFeeds = require('../../db/models/youtubeFeeds');

exports.list = async ctx => {
  const youtube = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = youtube;
};

exports.feeds = async ctx => {
  // Without library
  // const pageSize = 10;
  // const page = ctx.request.query.page ? Number(ctx.request.query.page) : 1;
  // const offset = ctx.request.query.offset
  //   ? Number(ctx.request.query.offset) + (page - 1)
  //   : (page - 1) * pageSize;
  // const limit = Number(ctx.request.query.limit) || pageSize;

  // With library
  const pageSize = 25;
  const page = ctx.request.query.page || 1;
  const limit = ctx.request.query.limit || pageSize;
  
  const totalDocs;
  const pageOffset;
  const totalPages;
  const hasNextPage;
  const prePrevPage;
  const prevPage;
  const nextPage;

  const options = {
    page: page,
    limit: limit,
    sort: { pubDate: 'desc' }
  };
  try {
    const aggregate = YoutubeFeeds.aggregate();
    const data = await YoutubeFeeds.aggregatePaginate(aggregate, options);
    // const data = await YoutubeFeeds.find()
    //   .select('-_id')
    //   .sort({ pubDate: 'desc' });
    ctx.body = { success: true, data: data };
  } catch (e) {
    ctx.status = 400;
    ctx.body = { success: false, message: e.message };
  }
};
