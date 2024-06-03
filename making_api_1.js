const http=require('http');
const data= require('./data1.js')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'contenttype':'application/json'})
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(8900);