const mongoose = require('mongoose');


const {MONG_URI} = process.env;

exports.connect = ()=>{
    mongoose.connect(MONG_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }).then(()=>{
        console.log("Success connected to database");
    })
}