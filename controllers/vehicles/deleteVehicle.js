const Vehicle =  require('../../model/Vehicle');

module.exports.deleteVehicle = async function(req, res){

    try {
        const _id = req.params.id; 
       // console.log("ID",_id);  
        const deleteVehicle = await Vehicle.findByIdAndDelete(_id);
        res.status(200).json(deleteVehicle);
       
      } catch (error) {
        console.log("error updating data",error);
        res.status(404).json("Error in updating data  ")
      }
}