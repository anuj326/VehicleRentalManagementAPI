const mongoose =  require('mongoose');

const customerData =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
   
},{
    timestamps:true
})

module.exports = mongoose.model('Customer', customerData);