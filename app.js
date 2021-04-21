const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const welcomeRouter = require('./routes/index');
const userRouter = require('./routes/users');
const pedidoRouter = require('./routes/pedido');
const configRouter = require('./routes/config');
//const resultadoRouter = require('./routes/resultado');

var app = express();

//Express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Connect flash
app.use(flash ())

//Globol variables 
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  //Flash for passport
  res.locals.error = req.flash('error')
  next()
})

app.use('/', welcomeRouter);
app.use('/usuario', userRouter);
//app.use('/resultado', resultadoRouter);
app.use('/pedido', pedidoRouter);
app.use('/configuracao', configRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler !!!
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
