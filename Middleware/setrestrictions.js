const express=require('express');
const app=express();

app.listen(5900);

const middleware=((req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age");
    }

    else if(req.query.age<18){
        resp.send("Jaoo Beta ghr jaoo Pehle bada baan jaao tb ispe aana ");
    }
    
    
    else{
         next();
    }

    
})

app.use(middleware);


app.get("/",(req,resp)=>{
    resp.send("Welcome to users page");
})

app.get("/watch",(req,resp)=>{
    resp.send("Welcome to the adult page and congratulation you have crossed that age limit");
})

app.get("/end",(req,resp)=>{
    resp.send("chl jaa ghr bhai ab ho gya ");
})