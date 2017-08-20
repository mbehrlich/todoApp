var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'view.pug'))
});

module.exports = router;