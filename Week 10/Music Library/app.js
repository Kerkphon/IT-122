const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/music-album',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('erro', console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Coonected");
})
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use('/', (req, res) => {
    res.render('home');
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})