const mongoose =  require('mongoose');

const vehicleData =  new mongoose.Schema({
    vehicleUser:{
        type:String,
        required:true,
    },
    make:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    fuel_type:{
        type:String,
        required:true,
    },
    seating_capacity:{
        type:String,
        required:true,
    }, 
    availability_status:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Vehicle', vehicleData);