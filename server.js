var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();
var port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(session({
	secret: 'carpediem',
	saveUninitialized: false,
	resave: false
}));



/**************** API Controller *************/
var UserCtrl = require('./api/controllers/UserCtrl.js');


/**************** API *************/

app.post('/auth/login', UserCtrl.login);

app.get('auth/logout', UserCtrl.logout);

app.get('api/getLists', function (req, res) {
	if (req.session.user) {
		UserCtrl.getLists();
	} else {
		res.status(403).send('Please login first')
	}
})

/************ END API *************/


/*************** DB ***************/
var mongoUri = 'mongodb://localhost:27017/betterTodo';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log('connected to db at ' + mongoUri)
})

app.listen(port, function() {
	console.log('Server listening on port ' + port);
})