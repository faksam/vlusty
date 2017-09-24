var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

//Start server
var port = 3456;
app.listen(port);
console.log("Listening on port : " + port);



// Require static assets from public folder
app.use('/public', express.static(path.join(__dirname + '/public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/latest', function (req, res) {
    res.render('latest.html');
});
app.get('/trending', function (req, res) {
      res.render('trending.html');
});
app.get('/topsearch', function (req, res) {
    res.render('topsearch.html');
});
app.get('/consult', function (req, res) {
    res.render('consult.html');
});
app.get('/hello', function (req, res, next) {
    res.send("Hello World!");
});
/*
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});
app.get('/about', function (req, res) {
    res.sendFile('/about.html');
});
app.get('/hello', function (req, res) {
    res.send("Hello World!");
});

*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('The Page You Are Looking For Was Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;