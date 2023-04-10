const movieService = require('../service/movie-service');

class MovieController {

  async addComment(req, res, next) {
    try {
      const comment = await movieService.addComment(req.body);
      return res.json(comment);
    } catch (error) {
      // next(error)
      res.status(500).json({ message: error });
    }
  }

  async getComments(req, res, next) {
    try {
      const params = req.params
      const comments = await movieService.getComments(params);
      return res.json(comments);
    } catch (error) {
      // next(error)
      res.status(500).json({ message: error });
    }
  }

}

module.exports = new MovieController();