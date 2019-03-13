const yaml = require('js-yaml');
const fs = require('fs');

const parseYaml = yaml.safeLoad(fs.readFileSync('./src/db/db.yml', 'utf8'));

module.exports = parseYaml;
