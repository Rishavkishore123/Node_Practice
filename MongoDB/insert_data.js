const dbConnect= require('./data_database');

const insert=async ()=>{
    const db= await dbConnect();
    const result=await db.insertMany([
        {name:"Water Bottle",company:"Milton",type:"Cooling"},
        {name:"ac",company:"samsung",type:"Cold"}
    ])
    if(result.acknowledged){
        console.log("data inserted successfully");
    }
   
}
insert();

