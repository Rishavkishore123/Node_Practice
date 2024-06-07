const express=require('express');

const app= express();

app.get('/',(req,resp)=>{

    resp.send("Welcome to the Home page");
    
})

app.get('/about',(req,resp)=>{
    resp.send("welcomes to the about page");
   
})

app.get('/help',(req,resp)=>{
    resp.send(  [
        {
        name:"rishav",
        email:'rishav@gmailcom',
        phonenumber:7282816806
       },

       {
        name:"subh",
        email:'subh@gmailcom',
        phonenumber:7282816806
       },
       {
        name:"xc",
        email:'@gmailcom',
        phonenumber:7282816806
       }

]);
    
})

app.get("/sign-in",(req,resp)=>{

    resp.send(`
        <form>
        <h3> Enter your name  </h3>
        <input type="text" placeholder="user_name" value= "${req.query.name}"/> 
        <button>log in</button>
        </form>
        `)

        
    
})

app.listen(8011);