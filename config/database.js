const mongoose = require('mongoose');


const {MONG_URI} = process.env;

exports.connect = ()=>{
    mongoose.connect(MONG_URI, {
        //Note: config สำหรับ mongodb Atlas
      //  useNewUrlParser: true,
        //useUnifiedTopology: true,
    }).then(()=>{
        console.log("Success connected to database");
    }).catch((error)=>{
        console.log("Error connecting to database: " + error.message);
        console.log(error);
        process.exit(1);
    })
}