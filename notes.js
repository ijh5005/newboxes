//require express
var express = require('express');
//make an intsance of express
var router = express();

//get(path, callback)
//res.render -> render the html to the page
router.get("/healthcheck", (req, res) => {
  var responseObject = { message: "OK" };
  res.send(responseObject);
});

let database = [];


router.post('/ilike/:icecreamchoice/:name', (req, res) => {
  //if the is a req body with a formfactor key
  if(req.body.formfactor){
    console.log(req.body.formfactor);
  } else {
    console.log('No formfactor!');
  }
  const choice = req.params.icecreamchoice;
  const name = req.params.name;
  if(name === 'manthan'){
    database.push({ choice: choice, name: name });
    const responseObject = { message: 'Hey ' + name + '! I like ' + choice + ' too!' };
    res.send(responseObject);
  } else {
    res.status(400).send();
  }

});

router.get('/likes', (req, res) => {
  //how to get headers note: headers are incrypted through https
  //so it good for passwords
  var logvalue = req.headers['log'];
  if(logvalue && logvalue == 'info'){
    console.log('Request received for /likes.');
  }

  //how to get query strings
  var select = req.query.select;
  if(database.length === 0){
    var responseObject = undefined;
    if(select && select == "count"){
      responseObject = { count: 0 }
    }
    res.status(404).send(responseObject);
  } else {
    var responseObject = database;
    if(select && select == "count"){
      responseObject = { count: database.length
       }
    }
    res.send(database);
  }
});

module.exports = router;











/////////////////
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var serverstat = require('./routes/serverstatus');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//define routes
app.use('/', index);
app.use('/users', users);
app.use('/serverstatus', serverstat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
