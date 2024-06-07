//create , read, update and delete

const fs=require('fs');
const path=require('path')

const dirpath= path.join(__dirname,"CRUD");

const filepath=`${dirpath}/mango.txt`;


fs.writeFileSync(`${filepath}`,"This is the apple page");



// fs.readFile(filepath,'utf8',(err,data)=>{
//     console.log(data);
// })

// fs.appendFile(filepath,  "   AUR aam kaise h meethe h ki nhi",(err)=>{
//    if(!err) console.log("data updated successfully");
// })







