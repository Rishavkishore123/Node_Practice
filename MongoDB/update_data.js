const database=require('./data_database');

const update=async ()=>{
    const db= await database();
    const data=await db.updateMany(
        {company:"samsung"},
        {
            $set:{company:'whirlpool'}
        }
    )
    if(data.acknowledged){
        console.log("Updated Successfully");
    }
}
update();