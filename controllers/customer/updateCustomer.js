const Customer = require('../../model/Customer');

module.exports.updateCustomer = async function(req, res){
         
    try {
      const _id = req.params.id; 
     // console.log("ID",_id);  
      const updateCutomer = await Customer.findByIdAndUpdate(_id, req.body , {new:true});
      res.status(200).json(updateCutomer);
      //console.log(updateVehicle);
    } catch (error) {
      console.log("error updating data",error);
      res.status(404).json("Error in updating data  ")
    }
  }