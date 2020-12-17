const mongoose = require('mongoose');
const Course = require('../models/course');

mongoose.connect('mongodb://localhost:27017/college-course', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    await Course.deleteMany({});
}

seedDB().then(() => {
    mongoose.connection.close();
})