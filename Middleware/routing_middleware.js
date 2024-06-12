const express= require('express');

const app=express();

const routes=express.Router();



const reqFilter=((req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age");
    }

    else if(req.query.age<18){
        resp.send("you are under age to see this page")
    }else{
        next();
    }
})

 routes.use(reqFilter);

app.get("/",(req,resp)=>{
    resp.send("Welcome to Home Page");
})

app.get("/users",(req,resp)=>{
    resp.send("Welcome to Users Page");
})

app.get("/about",(req,resp)=>{
    resp.send("Welcome to About Page");
})

routes.get("/contact",(req,resp)=>{
    resp.send("Welcome to Contact Page");
})

routes.get("/adult",(req,resp)=>{
    resp.send("Welcome to Adult Page");
})

app.use("/",routes);

app.listen(1001);

