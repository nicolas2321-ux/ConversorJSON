var express = require('express');
const { revisionFactura } = require('../controllers/conversorController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/revisionFactura/:tipo', revisionFactura)
module.exports = router;
