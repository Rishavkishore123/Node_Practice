const mongoose= require('mongoose');

const database= async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/instaclone');

    const ProductSchema=new mongoose.Schema({
        name:String,
        PhoneNumber: Number,
        FavColor: String
    })

    const productModel=mongoose.model("registers",ProductSchema);

    let data= productModel({name:"Satyam",PhoneNumber: 620686567, FavColor:"ladyFinger"});
    let result=await data.save();
    console.log(result);
}

database()