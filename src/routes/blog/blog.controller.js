const { getBlogAuthors, getBlogFeeds } = require('../../utils/query');
const { successMessage, errorMessage } = require('../../utils/response');

exports.list = async ctx => {
  try {
    ctx.body = successMessage('data', await getBlogAuthors());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};

exports.feeds = async ctx => {
  try {
    ctx.body = successMessage('data', await getBlogFeeds(ctx));
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};
