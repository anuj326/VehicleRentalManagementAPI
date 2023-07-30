const Customer = require('../../model/Customer');

module.exports.deleteCustomer = async function(req, res){

    try {
        const _id = req.params.id; 
       // console.log("ID",_id);  
        const deleteCustomer = await Customer.findByIdAndDelete(_id);
        res.status(200).json(deleteCustomer);
        //console.log(updateVehicle);
      } catch (error) {
        console.log("error updating data",error);
        res.status(404).json("Error in updating data  ")
      }
}