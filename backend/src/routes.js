const express = require('express');
const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

//Resources;
routes.get('/tweet', TweetController.index);
routes.get('/tweet/:id', TweetController.show);
routes.post('/tweet', TweetController.store);
routes.post('/likes/:id', LikeController.store);

routes.put('/tweet/:id', TweetController.update);
routes.delete('/tweet/:id', TweetController.destroy);

module.exports = routes;