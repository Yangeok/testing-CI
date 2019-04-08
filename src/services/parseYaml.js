const yaml = require('js-yaml');
const fs = require('fs');

const parseBlog = yaml.safeLoad(fs.readFileSync('./src/db/blog.yml', 'utf8'));
const parseYoutube = yaml.safeLoad(
  fs.readFileSync('./src/db/youtube.yml', 'utf8')
);
module.exports = {
  parseBlog,
  parseYoutube
};
