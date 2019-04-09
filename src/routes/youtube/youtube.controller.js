const Youtube = require('../../db/models/youtube');
const { parseYoutube } = require('../../services/parseYaml');

exports.list = async ctx => {
  const youtube = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = youtube;
};

exports.create = async ctx => {
  if (await Youtube.find({})) {
    await Youtube.deleteMany();
  }
  try {
    const data = await Youtube.insertMany(parseYoutube);
    ctx.body = {
      success: true,
      data: data
    };
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: e.message
    };
  }
};

exports.modify = async ctx => {
  try {
    const data = parseYoutube.forEach(async i => {
      await Youtube.updateOne(
        { name: i.name },
        { $set: { url: i.url, desc: i.desc } }
      );
    });
    ctx.body = {
      success: true
    };
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: e.message
    };
  }
};
