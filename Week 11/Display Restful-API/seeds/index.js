const mongoose = require('mongoose');
const cities = require('./cities');
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
    for (let i = 0; i < 5; i++) {
        const random10 = Math.floor(Math.random() * 10);
        const c = new Course({
            location: `${cities[random10].city}, ${cities[random10].state}`,
        })
        await c.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})