/*console.log('init');

var controller = require('../controllers/homeController');

console.log('init 2');

module.exports = function(app){

var controller = {};

controller.index = function(req, res) {
    res.render('index', {nome: 'Express'});
  };


console.log('bb'+controller.index );
    app.get('/index', controller.index);
    app.get('/',controller.index );
}*/

module.exports = function(app) {

  var controller = app.controllers.homeController;
  app.get('/', controller.index);
  app.get('/index', controller.index);

};
