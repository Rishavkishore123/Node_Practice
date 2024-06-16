const dbConnect=require('./data_database');

const deleteData=async ()=>{
    const db=await dbConnect();
    
    const data=await db.deleteMany({name:"Water Bottle"});
    
   if(data.acknowledged){
    console.log("Your data is deleted");
   }
}
deleteData();