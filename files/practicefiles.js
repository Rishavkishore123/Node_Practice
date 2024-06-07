// const fs= require('fs');

// const path=require('path');
// const dirPath= path.join(__dirname,'files');

// for(i=0;i<5;i++){
//     const filePath= path.join(dirPath,`Hello_${i}.txt`);
//      fs.writeFileSync(filePath,"THIS IS THE FILE TO GET INFORMATION");
//      console.log(` ${filePath} File created successfully`);
// }


const fs=require('fs');
const path= require('path');

const dirPath=path.join(__dirname,"files1");

for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+ "/Hello_"+i+".txt","This is the information file ")
}

// fs.readdir(dirPath,((err,data)=>{
//     console.log(data)
// }))  //this will give the all items of files name in one array, but i want to iterate each file


fs.readdir(dirPath,((err,data)=>{
    data.forEach((item)=>{
        console.log("File name ",item);
    })
}))








// const fs = require('fs');
// const path = require('path');

// // Ensure the directory exists. If not, create it.
// const dirPath = path.join(__dirname, 'files');
// if (!fs.existsSync(dirPath)){
//     fs.mkdirSync(dirPath);
// }

// for (let i = 0; i < 5; i++) {
//     const filePath = path.join(dirPath, `Hello_${i}.txt`);
//     fs.writeFileSync(filePath, "This is the file and saying hello to all");
//     console.log(`File ${filePath} created successfully.`);
// }