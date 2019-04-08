const mongoose = require('mongoose');
const youtubeSchema = new mongoose.Schema({
  name: String,
  desc: String,
  url: String
});
module.exports = mongoose.model('Youtube', youtubeSchema);
