const express= require('express');
const app= express();

app.listen(7900);

app.get('/',(req,resp)=>{
    resp.send("Welcome to Home page");
})

app.get('/users',(req,resp)=>{
    resp.send("Welcome to users page");
})

const reqFilter=((req,resp,next)=>{
   next();
})
app.use(reqFilter);


app.get('/rishav',(req,resp)=>{
    resp.send("Welcome to Rishav page");
})
