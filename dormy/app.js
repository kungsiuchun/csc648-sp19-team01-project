const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const nunjucks = require('nunjucks');
const listingRouter = require('./routes/listings');

const app = express();

// views directory & engine setup
// i setup nunjucks (https://mozilla.github.io/nunjucks/)
// LET ME KNOW IF U WANT THIS CHANGED FRONTEND
nunjucks.configure('views', {
    express: app,
    autoescape: true
});
app.set('view engine', 'html');

// logger for outputs to console
app.use(logger('dev'));

// middleware used populate body request property; (express.json())
// other middleware for encoding and cookies
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// static file setup (images, css, frontend javascript)
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static('public'));

// routes
app.get('/', (req, res) => res.render('index'));
app.use('/listings', listingRouter);

// if it made it here then an error occurred, throw 500 error
app.use((req, res, next) => next(createError(500)));

app.get('/css/*', function(req, res){
    res.sendFile(__dirname + '/css/styles.css')
});

app.listen(3000, () => console.log(`Express running at http://localhost:3000`));
