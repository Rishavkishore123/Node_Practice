const fs= require('fs');

const input=process.argv;

if(input[2]=="add"){
    fs.writeFileSync(input[4],input[5]);
}
else if(input[2]=="remove"){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid input");
}

