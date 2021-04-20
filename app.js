const express = require('express')
const expresslayouts = require('express-ejs-layouts')
const app = express()
const mongoose = require('mongoose')
//show message that user was created
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

//Port
const PORT = process.env.PORT || 7000

//Passport Config
require('./config/passport')(passport)

//DB Config
const db = require('./config/keys').MongoURI

//Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//EJS
app.use(expresslayouts)
app.set('view engine', 'ejs')

//Bodyparser (getting date from the form with request)
app.use(express.urlencoded({ extended: false }))

//Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }))

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

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

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
app.use('/pedidos', require('./routes/pedidos'))
app.use('/settings', require('./routes/settings'))

//Server
app.listen(PORT, console.log(`Server up listenning on port ${PORT}`))