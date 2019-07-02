const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const youtubeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  desc: String,
  url: String
});

youtubeSchema.plugin(uniqueValidator);
youtubeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Youtube', youtubeSchema);
