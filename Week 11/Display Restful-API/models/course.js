const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: String,
    price: String,
    location: String
});

module.exports = mongoose.model('Course', CourseSchema);