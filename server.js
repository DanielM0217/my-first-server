// Your server code goes here. Host your server on localhost:3000
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    // response.end('Hello from Node!');

    //return index.html if someone uses localhost:3000 or localhost:3000/index.html
    if (request.url === '/' || request.url === '/index.html'){
        //use fs to read file systems and return the index.html
        fs.readFile('index.html', function(error, data){
            if (error) {
                response.writeHead(500);
                response.end('Something went wrong');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html'});
                response.end(data);
            }
        })
    } else {
        response.writeHead(404);
        response.end('page not found');
    }
})

server.listen(3000, function() {
    console.log('Server is running at localhost:3000');
}) 