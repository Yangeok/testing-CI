const Youtube = require('../../db/models/youtube');

exports.list = async ctx => {
  const youtube = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = youtube;
};
