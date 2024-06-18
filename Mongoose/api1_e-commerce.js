const mongoose= require('mongoose');

const main=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');

    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number
    })

    const productModel=mongoose.model("products",ProductSchema);
    let data=productModel({name:"earbuds",price:290});
    let result=await data.save();
    console.log(result);
}

main()
console.log("server is running")