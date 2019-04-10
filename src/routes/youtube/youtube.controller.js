const Youtube = require('../../db/models/youtube');
const YoutubeFeeds = require('../../db/models/youtubeFeeds');

exports.list = async ctx => {
  const youtube = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = youtube;
};

exports.feeds = async ctx => {
  const data = await YoutubeFeeds.find()
    .select('-_id')
    .sort({ pubDate: 'desc' });
  ctx.body = data;
};
