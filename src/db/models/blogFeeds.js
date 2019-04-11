const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate-v2');

const blogFeedsSchema = new mongoose.Schema({
  creator: String,
  title: { type: String, unique: true },
  link: String,
  pubDate: Date,
  contentSnippet: String
});

blogFeedsSchema.plugin(uniqueValidator).plugin(mongoosePaginate);
module.exports = mongoose.model('BlogFeed', blogFeedsSchema);
