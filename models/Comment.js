const { Schema, model } = require('mongoose');

const schema = new Schema({
  user_id: {type: String},
  movie_id: {type: String},
  avatar: {type: String},
  date: {type: String},
  spoiler: {type: String},
  rating: {type: String},
  review: {type: String},
  autor: {type: String}
});

module.exports = model('comments', schema);