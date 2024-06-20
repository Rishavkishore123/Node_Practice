const express= require('express');
const app=express();

const mongoose=require('mongoose');

  mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');

  const ProductSchema=new mongoose.Schema({
    Name:String,
    PhoneNumber:Number,
    Company:String,
    Salary:Number
})

//create

const database=async ()=>{

    const productModel=mongoose.model('products',ProductSchema);
    let data=productModel({Name:"Sanchita Ghosh",PhoneNumber:6206860867,Company:"HFT",Salary:20000000});
    let result=await data.save();

}

//update

const updateinDatabase=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
    const productModel=mongoose.model('products',ProductSchema);
    let data=await productModel.updateOne(
        {Name:'Sanchita Ghosh'},

        {
            $set: {Company:'Uber'}
        }

    )

    
    console.log(data);
}

// read
const readData=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
    const productModel=mongoose.model('products',ProductSchema);

    let data= await productModel.find({_id:'667461d9f621875cf8ee3edd', Name:'Sanchita Ghosh'});

    console.log(data);
}

//Delete

const delData=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
    const productModel=mongoose.model('products',ProductSchema);
    let data=await productModel.deleteOne({Name:'Sanchita Ghosh'});

}
delData()

