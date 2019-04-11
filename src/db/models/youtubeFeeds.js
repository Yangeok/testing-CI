const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const youtubeFeedsSchema = new mongoose.Schema({
  creator: String,
  title: { type: String, unique: true },
  link: String,
  pubDate: Date
});

youtubeFeedsSchema.plugin(uniqueValidator);
youtubeFeedsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('YoutubeFeed', youtubeFeedsSchema);
