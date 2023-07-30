const mongoose =  require('mongoose');

const bookingData =  new mongoose.Schema({
    name:{
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
    seatingCapacity:{
        type:String,
        required:true,
    }, 
    startDate:{
        type:String,
        required:true,
    },
    endDate:{
        type:String,
        required:true,
    },

},{
    timestamps:true
})

module.exports = mongoose.model('Booking', bookingData);