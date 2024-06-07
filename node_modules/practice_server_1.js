const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hii this is creating server</h1>");
    resp.end();
}).listen(8000);

