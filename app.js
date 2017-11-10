const express = require('express');
const app = express();
const session = require('client-sessions')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {db} = require('./server/models')
const router = require('./server/routes');

const chalk = require('chalk');

// middleware
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  cookieName: 'session',
  secret: 'random_string',
  duration: 30*60*1000,
  activeDuration: 5*60*100
}))
app.use(express.static('server/templates'))
app.use('/public', express.static('browser/public'));

app.use('/', router);
db.sync()
.then(() => {


app.listen(3001, function() {
  console.log( chalk.blue('App is listening on port 3001.') );
});

})
.catch(err => console.log(err))
