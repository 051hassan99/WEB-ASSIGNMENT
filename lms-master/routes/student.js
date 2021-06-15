var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/givenFeedback', function(req, res, next) {
 
  feedback.create(req.body)
  .then((feedbackData) => {
      console.log('Feedback has been Added ', feedbackData);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(feedbackData);
  }, (err) => next(err))
  .catch((err) => next(err));
});


module.exports = router;
