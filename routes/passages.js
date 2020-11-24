var express = require('express');
var router = express.Router();
const passagesCtrl = require('../controllers/passages');

router.get('', passagesCtrl.index);

module.exports = router;