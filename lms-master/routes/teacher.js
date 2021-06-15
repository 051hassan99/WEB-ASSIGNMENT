var express = require('express');
var router = express.Router();
var QuizMarks = require('../models/quizMarks');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/uploadQuizMarks', function(req, res, next) {
 
  QuizMarks.create(req.body)
  .then((data) => {
      console.log('Quiz Marks have been Added ', data);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
  }, (err) => next(err))
  .catch((err) => next(err));
});

module.exports = router;
