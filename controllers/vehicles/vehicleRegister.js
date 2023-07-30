const Vehicle = require('../../model/Vehicle');

module.exports.vehicleRegister  = async function(req, res){

    try {
        const {vehicleUser, make , model , year , fuel_type ,seating_capacity , availability_status} = req.body;

        if(!vehicleUser ,!make || !model || !year || !fuel_type || !seating_capacity || !availability_status){
            console.log('All fields are Mandatory');
            return res.status(400).json({error:'All fields are Mandatory'})
        }
        const vehicleExist = await Vehicle.findOne({vehicleUser:vehicleUser})
        if(vehicleExist){
            return res.status(422).json({error:'Vehicle already registered'})
        }
        const vehicleData = new Vehicle({
            vehicleUser ,make , model , year , fuel_type ,seating_capacity , availability_status
        })
        vehicleData.save();
        res.status(200).json("Vehicle has been registered");
    } catch (error) {
        console.log("error ",error);
        res.status(404).json("Error")
    }
}