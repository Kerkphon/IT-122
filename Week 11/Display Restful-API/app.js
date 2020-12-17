const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Course = require('./models/course');

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

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('home')
});
app.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    res.render('courses/index', { courses })
});
app.get('/courses/new', (req, res) => {
    res.render('courses/new');
})

app.post('/courses', async (req, res) => {
    const course = new Course(req.body.course);
    await course.save();
    res.redirect(`/courses/${course._id}`)
})

app.get('/courses/:id', async (req, res,) => {
    const course = await Course.findById(req.params.id)
    res.render('courses/show', { course });
});

app.get('/courses/:id/edit', async (req, res) => {
    const course = await Course.findById(req.params.id)
    res.render('courses/edit', { course });
})

app.put('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, { ...req.body.course });
    res.redirect(`/courses/${course._id}`)
});

app.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.redirect('/courses');
})


app.listen(8080, () => {
    console.log('Serving on port 8080')
})