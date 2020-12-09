// Load express framework and body-parser helper
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

// Create instance of express
const app = express()

// Load node's built-in file system helper
// We'll use this to server JSON files
const fs = require('fs')

// Configure express instance with body-parser
// settings including handling JSON data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// This is where we handle our routes
const routes = require('./routes/routes.js')(app, fs)

app.listen(port, () => {
    console.log(` App listening at http://localhost:${port}`)
  })