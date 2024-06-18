const express=require('express');

const database= require('../MongoDB/data_database')
const app=express();

app.use(express.json())

app.get('/',async (req,resp)=>{
    
    let data=await database();
    data=await data.find().toArray();
    resp.send(data);
})

app.post('/',async (req,resp)=>{
    let db= await database();
    let data=await db.insertOne(req.body);
    resp.send(data);
})

app.listen(5700,()=>{
    console.log("Server is Running")
})