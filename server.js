// express web server 

const express = require('express');
const app = express();
const lesson1Controler = require('./controllers/lesson1')
const port = 3000;
 
app.get('/', lesson1Controler.firstRoute);
app.get('/nuevo',lesson1Controler.secondRoute);
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});