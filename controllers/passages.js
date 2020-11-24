const passagesDb = require('../models/passage');

function index(req, res) {
  res.render('passages/index', {
    passages: passagesDb.getAll()
  });
}

module.exports = {
  index: index,
};