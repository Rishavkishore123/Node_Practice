const express= require('express');
const path= require('path');
const http= require('http');

const socketio= require('socket.io');



const app=express();
const server= http.createServer(app);
const io= socketio(server);

app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,resp)=>{
    resp.render('cindex');
})

io.on('connection',(socket)=>{
    socket.on("send-location",(data)=>{
        io.emit("receive-location",{id:socket.id, ...data})
    })
    console.log("connected")
})

io.on("disconnect",()=>{
    socket.on("user-disconnect",socket.id)
})

server.listen(4001,()=>{
    console.log("Server Running")
})