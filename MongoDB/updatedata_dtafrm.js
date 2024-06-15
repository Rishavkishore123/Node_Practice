const database= require('./dtafrmmongo')

async function updateData(){
    let db=await database();
    let result= await db.updateMany(
        {category:"samsung"},
        {
            $set:{category:"Panasonic", type:"heat"}
        }
    ) 
    if(result.acknowledged){
        console.log("Updated Successfully");
    }
}
updateData();