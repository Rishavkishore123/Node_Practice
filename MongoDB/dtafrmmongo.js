const {MongoClient}=require('mongodb');

const url ='mongodb://127.0.0.1:27017'

const databases='e-commerce';
const client=new MongoClient(url);

async function getdata(){
    let result=await client.connect();
    let db=result.db(databases);
    return db.collection('products');
    // let response=  await collections.find({}).toArray();
    // console.log("mongodb connected");
    // console.log(response);
  
}

module.exports=getdata;