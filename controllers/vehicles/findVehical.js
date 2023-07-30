const Vehicle = require('../../model/Vehicle');

module.exports.findVehicle = async function(req, res){
    
    try {
        //console.log(req.query);
        const data = await Vehicle.find(req.query);
        //console.log(data);
        if(data.length == 0){
            res.status(204).json({messsage:"No Matching Record Found"});
        }else{
            res.status(200).json(data);
        }
                
    } catch (error) {
        console.log('Error in Fetcing Data');
        res.status(404).json("Error in Fetcing Data");
    }
}