exports.list = async ctx => {
  const parseYaml = require('../../services/index');

  ctx.body = {
    parseYaml
  };
};
