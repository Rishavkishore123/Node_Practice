const express= require('express');

const app= express();

const database= require("../MongoDB/dtafrmmongo");

app.use(express.json());

app.get('/',async (req,resp)=>{
    let db= await database();
    let result=await db.find().toArray();
   resp.send(result);
})

app.put('/', async (req,resp)=>{
    let db=await database();
    let data=await db.insertOne(req.body);
    resp.send(data);

    
})

app.listen(6700,()=>{
    console.log("Server is ruunning")
})

