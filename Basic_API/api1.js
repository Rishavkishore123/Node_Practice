const express=require('express');

const database= require('../MongoDB/data_database')
const app=express();

app.get('/',async (req,resp)=>{
    
    let data=await database();
    data=await data.find().toArray();
    resp.send(data);
})

app.listen(5500,()=>{
    console.log("Server is Running")
})