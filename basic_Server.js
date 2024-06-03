const http= require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hello World, Ready to Learn a node javascript</h1>");
    resp.end();
}).listen(4500);