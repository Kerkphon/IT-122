const Joi = require('joi');
const express =  require('express');
const app = express();

app.use(express.json()); // adding middleware to parse JSON objects

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req,res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req,res) => {
    res.send(/*[1,2,3]*/ courses)
});

// read the value of a parameter in a route
app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given ID not found.') // use 404 if course not found
    res.send(course); // otherwise respond with the course
});

app.post('/api/courses', (req,res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // the following code has been moved to a validate function
    // at the bottom. This code was in 2 different places.
    // Here in the post and in the app.put()
    
/*     const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    //console.log(result);

    //if (!req.body.name || req.body.name.length < 3) {
    if (result.error) {
        // 400 Bad Request
        //res.status(400).send("Name is required and should be a minimum of 3 characters");
        res.status(400).send(result.error.details[0].message);
        return;
    } 
*/
    const course = {
        id: courses.length + 1, // ordinarily this would be handled by a db but we aren't using one
        name: req.body.name // this assumes that there is an object in the body with a property called name
    };
    courses.push(course); // add new course to the array
    res.send(course); // return the course item to the client
});

app.put('/api/courses/:id', (req,res) => {
    // Look up the course
    // if does not exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given ID not found.')    

    // Validate
    // if invalid, return 400 - Bad request
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }    

    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not exiting, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given ID not found.')

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

/* 
// it is also possible to read multiple parameters in a route
app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.query);
});
 */

//PORT: we will use the global object process which has a property 
//called env and the we add the environment variable PORT 
// we assign the environment variable to a constant called port
// you can change the port environment variable on your machine
// in terminal using the export command 'export PORT=5000'
// and in command prompt using the set command.
const port  = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))

