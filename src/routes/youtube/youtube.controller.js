const parseYaml = require('../../services/parseYaml');

exports.list = async ctx => {
  ctx.body = {
    parseYaml
  };
};
