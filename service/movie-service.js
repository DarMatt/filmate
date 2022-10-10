const User = require('../models/User');
const CommentsSchema = require('../models/Comment');
const moment = require('moment');

class MovieService {

  async addComment({ user_id, movie_id, review, rating, spoiler }) {
    const user = await User.findOne({"_id": user_id});

    const comment = await CommentsSchema.create({
      user_id,
      movie_id,
      avatar: user.files,
      date: moment().format('lll'),
      spoiler,
      autor: user.lastName + " " + user.firstName,
      review,
      rating,
    });

    if (comment) {
      return comment;
    }
  }

  async getComments(params) {
    const comments = await (await CommentsSchema.find({"movie_id": params.movie_id})).reverse();

    if (comments) {
      return comments;
    }
  }


}

module.exports = new MovieService();