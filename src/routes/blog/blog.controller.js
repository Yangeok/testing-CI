const Blog = require('../../db/models/blog');
const { parseBlog } = require('../../services/parseYaml');

exports.list = async ctx => {
  const blogs = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  ctx.body = blogs;
};

exports.create = async ctx => {
  try {
    await Blog.remove();
    const data = await Blog.insertMany(parseBlog);
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
    const data = parseBlog.forEach(async i => {
      await Blog.updateOne(
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
