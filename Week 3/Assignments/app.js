// console.log('Hello World);

// simple Web Server

// a constant variable is used to store and use the http module
const http = require('http');

// Constant variable is used to store  the hostname and port info
const hostname = '127.0.0.1';
const port = 1337;

// Here the createServer() method of the http module that was created. The 
// createServer() method will take in a request 're' and a reponse 'res' as parameters
http.createServer(function(req, res){
  // The writeHead() method of the reponse parameter is called to
  //set the status to 200 and the Context-Type to text/plan
  res.writeHead(200, {'Content-Type' : 'text/plan'});
  //End the reponse and echo out Hello world 
  res.end('Hello World');
  // add a listener passing the port and hostname
  //thens logs to the console that server is running.
  }).listen(port, hostname, () => {
    // once server is created log to the 
    console.log('Server running at http://${hostname}:${port}/')

});