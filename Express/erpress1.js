const express=require('express');

const app= express();

app.get('/',(req,resp)=>{
    // console.log("Browser sent by data",req.query.name) //this is how the browser request
    resp.send("Welcome to the Home page");
    resp.end();
})

app.get('/about',(req,resp)=>{
    resp.send("welcomes to the about page");
    resp.end();
})

app.get('/help',(req,resp)=>{
    resp.send("Welcome to the Help page");
    resp.end();
})

app.get("/sign-in",(req,resp)=>{
    resp.send("Hello this is rishav signing off")
    resp.end();
})

app.listen(8010);