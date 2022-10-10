const { Router } = require('express');
const router = Router();
const MovieController = require('../controllers/movie-controller');

router.get('/comments/:movie_id', MovieController.getComments);
router.post('/add-to-comment', MovieController.addComment);

module.exports = router;
