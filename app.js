var express = require('express');
var bodyParser = require('body-parser');

//1const connectDB = require('./mongooseConnection/connection');
var todoController = require('./controllers/todocontroller'); 
var app = express();
//set up template engine
app.set('view engine', 'ejs');
//static files 
app.use(express.static('./public/assets/'));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//fire controllers
todoController(app);
//2connectDB();
//3app.use(express.json({ extended : false}));
//4app.use('/API/userModel', require('./API/user'));
//locahost:3000/style.css
app.listen(3000);
console.log('You are listening to port 3000');