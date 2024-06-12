const {MongoClient}=require('mongodb');

const url='mongodb://127.0.0.1:27017'

const databases='students';

const client= new MongoClient(url);

async function getdata(){
    let res=await client.connect();
    let db=res.db(databases);
    let collections= db.collection('courses');
    let result= await collections.find({}).toArray();
    console.log("db connected")
    console.log(result)
}
getdata()