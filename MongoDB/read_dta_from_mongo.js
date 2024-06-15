const dbConnect=require('./data_database');

const main=async ()=>{
    let data=await dbConnect();
    console.log('db connected')
    data=await data.find({}).toArray();
    console.log (data);
}
main();


// why we create another file because this is the right way to read or get the data from the databases