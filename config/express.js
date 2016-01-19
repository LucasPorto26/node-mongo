var express = require('express');
var load = require('express-load');
var home = require('../app/routes/home');
var bodyParser = require('body-parser');

var path = require('path');
var root = path.dirname(require.main.filename);

module.exports = function(){

    var app = express();

    app.set('port',8080);
    
    app.use(express.static('./public'));
    app.use(express.static('/app/public/partials'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')())

    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
}
