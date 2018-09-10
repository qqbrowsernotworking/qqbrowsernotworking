var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => {
  if(req.body.username) {
    res.cookie('session=123; Path=/; HttpOnly;');
    res.redirect('/ws');
  } else {
    res.redirect('/');
  }
});

router.get('/ws', (req, res) => {
  if(req.cookies.session === '123') {
    res.render('ws');
  } else {
    res.redirect('/');
  }
});

module.exports = router;
