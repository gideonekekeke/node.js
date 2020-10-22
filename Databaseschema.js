const mongoose = require('mongoose');



//create the dataschema
const createschema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default : "samuel"

    },

    age : {
        type: Number,
        required : true,
        default : 18
    },

    email : {
       type: String,
       required : true,
       default : "@gmail.com"

}



})







module.exports = mongoose.model('schema',createschema)