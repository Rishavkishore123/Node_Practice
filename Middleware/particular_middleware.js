const express=require('express');
const app=express();


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

// app.use(reqFilter);

app.get("/",reqFilter,(req,resp)=>{
    resp.send("Welcome to Home Page");
})

app.get("/users",(req,resp)=>{
    resp.send("Welcome to users Page");
})

app.get("/about",(req,resp)=>{
    resp.send("Welcome to about Page");
})

app.listen(9999);


//Notes But this is not the good practice to apply middleware, because when you 100 of files aur page you did not go on one page and write 
//these this things ,bs issi chiz ko thik krne aaya routing middleware.
//aur haa yeh important baat app.get globally hota aur route.get kisi ek file me v ho skta h aur ek se jyda pages me v  mtlb single route v
// bna skte ho aur ek se jyda v route bna skte ho

