// Load the users route
const userRoutes = require('./users')

const appRouter = (app, fs) => {
    // default route for empty routes
    // at the base api url
    app.get('/', (req,res) => {
        res.send('Welcom to the development API-Server')
    })
    // run the user route module 
    userRoutes(app,fs)
}

module.exports = appRouter