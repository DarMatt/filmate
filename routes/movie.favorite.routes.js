const { Router } = require('express');
const Movie = require('../models/Favorite');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/generate', auth, async (req, res) => {
  try {
    const {
      id,
      poster_path,
      backdrop_path,
      title,
      vote_average,
      overview,
      genre_ids,
      isFavorite,
      isWatchLater,
    } = req.body;

    const existing = await Movie.findOne({
      id: req.body.id,
      owner: req.user.userId,
    });

    if (existing) {
      return res.json({ message: 'User is existing' });
    }

    const movie = new Movie({
      id,
      poster_path,
      backdrop_path,
      title,
      vote_average,
      overview,
      genre_ids,
      isFavorite,
      isWatchLater,
      owner: req.user.userId,
    });

    await movie.save();

    res.status(201).json({ movie });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const movies = await Movie.find({ owner: req.user.userId });
    res.json(movies);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const movie = await Movie.deleteOne({ id: req.params.id }, { owner: req.user.userId });
    res.json(movie);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
});

module.exports = router;