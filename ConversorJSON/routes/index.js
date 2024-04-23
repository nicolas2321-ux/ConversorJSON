var express = require('express');
const { conversor } = require('../controllers/conversorController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/conversor', conversor)
module.exports = router;