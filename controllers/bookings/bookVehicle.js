const Booking = require('../../model/Booking');
const Vehicle = require('../../model/Vehicle');

module.exports.bookVehicle = async function(req, res){

    try {
        const {name , make , model , seatingCapacity, startDate, endDate } = req.body;

        if(!name|| !make || !model || !seatingCapacity || !startDate || !endDate){
            console.log('All fields are Mandatory');
            return res.status(400).json({error:'All fields are Mandatory'})
        }
        const isAvailable = await Vehicle.find({make});
        // console.log(isAvailable);
        // console.log(isAvailable[0].make);
        if(isAvailable[0].availability_status == 'Available'){
            const bookingData = new Booking({
                name , make , model , seatingCapacity, startDate, endDate
            })
    
            bookingData.save();
        const availableStatus = 'Booked';
        const _id = isAvailable[0]._id;
        const updateVehicle = await Vehicle.findByIdAndUpdate(_id, {availability_status:availableStatus} , {new:true});
        res.status(200).json(`booking confirmed from ${startDate} To ${endDate}`);
        }else{
            return res.status(422).json({error:'Vehical Not Available'})
        }
        
    } catch (error) {
        console.log("error ",error);
        res.status(404).json("Error")
    }
}

