const database=require('./dtafrmmongo');

const inserting=async()=>{
    const db= await database();
    const inserted= await db.insertOne(
        {name:"ac",category:"samsung", type:" colling"}
    )
    if(inserted.acknowledged){
        console.log("data Insertred Successfully");
    }
    
}

inserting();