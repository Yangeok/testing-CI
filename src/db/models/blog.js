const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const blogSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  desc: String,
  url: String
});

blogSchema.plugin(uniqueValidator);
blogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Blog', blogSchema);
