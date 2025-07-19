const routes = require('express').Router();
const lesson1Controler = require('../controllers/lesson1')

routes.get('/', lesson1Controler.rootRoute)
routes.get('/first', lesson1Controler.firstRoute);
routes.get('/second',lesson1Controler.secondRoute);

module.exports = routes;