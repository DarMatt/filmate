const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  id: { type: Number, required: true },
  poster_path: { type: String },
  backdrop_path: { type: String },
  title: { type: String, require: true },
  vote_average: { type: Number },
  overview: { type: String, require: true },
  genre_ids: {type:  Array },
  isFavorite: { type: Boolean, default: false },
  isWatchLater: {
    withFamily: { type: Boolean, default: false },
    withFriends: { type: Boolean, default: false },
    withTrueLove: { type: Boolean, default: false },
    Alone: { type: Boolean, default: false },
  },
  owner: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('WatchLater', schema);
