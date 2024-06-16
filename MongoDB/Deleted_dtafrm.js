const database=require('./dtafrmmongo');

const deletedData=async ()=>{
    const db=await database();
    const result= await db.deleteMany({name:"ac"})

    if(result.acknowledged){
        console.log('Deleted Successfully');
    }
}
deletedData();