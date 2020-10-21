//add modules to the app
var express = require('express');
var path = require('path'); //Path is root module so it does not need to be added in the dependencies
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

//initialized the app
var app = express();

//setup jade views. This tells jade which folder the template fileswill be in
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'jade');

//set the body parser
app.use(bodyParser.json()); // parse json 
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

//setup a router
app.get('/', function(req, res){
    //console.log("Here");
    //res.send("Hello World")
    res.render('index')
});

app.listen(3000);
console.log("Server is running on port 3000")