const mongoose = require('mongoose');





const baseschema  = new mongoose.Schema({
name : {
    type: String,
    required: true,
},

email :{
    type: String,
    required: true,
}









})




module.exports = mongoose.model('shema',baseschema)