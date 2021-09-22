var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');  
var cors =require('cors');


var indexRouter = require('./routes/index');
var guideDetailsRouter = require('./routes/guide-details');
var bookingsRouter = require('./routes/bookings');
var usersRouter = require('./routes/users');
var guidesRouter = require('./routes/guides');
var messagesRouter = require('./routes/messages');
var packageRouter = require('./routes/packages');
var hotelsRouter = require('./routes/hotels');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/guide-detail',cors(), guideDetailsRouter);
app.use('/bookings',cors(), bookingsRouter);
app.use('/users',cors(), usersRouter);
app.use('/guides',cors(), guidesRouter);
app.use('/messages',cors(), messagesRouter);
app.use('/packages',cors(), packageRouter);
app.use('/hotels',cors(), hotelsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); 

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
