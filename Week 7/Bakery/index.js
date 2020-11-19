const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
//const foodData = require('./data.json');
const { response } = require('express');
const app = express();

app.locals.foodData = require('./data.json')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req, res) => {
    res.render('Home')
})

app.get('/menu', (req, res) =>{
    res.render('menu');
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
});
