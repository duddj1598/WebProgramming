const http = require('http');

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hi ! Welcom ~ </h1>");
    res.write("<h1>Hello World!</h1>");
    res.end('Hello World!');
});

server.listen(500);