const Vehicle = require('../../model/Vehicle');

module.exports.updateVehicle = async function(req, res){
         
  try {
    const _id = req.params.id; 
   // console.log("ID",_id);  
    const ifBooked = await Vehicle.findById(_id);
    console.log(ifBooked.availability_status); 
    if(ifBooked.availability_status ==  'Booked'){
      res.status(209).json("Action not allowed as status is Booked")
    }else{
      const updateVehicle = await Vehicle.findByIdAndUpdate(_id, req.body , {new:true});
      res.status(200).json(updateVehicle);
      //console.log(updateVehicle);
    }
  } catch (error) {
    console.log("error updating data",error);
    res.status(404).json("Error in updating data  ")
  }
}