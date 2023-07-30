const Customer = require('../../model/Customer');

module.exports.customerRegister = async function(req, res){


    try {
        const {name , email , contact} = req.body;

        if(!name|| !email || !contact){
            console.log('All fields are Mandatory');
            return res.status(400).json({error:'All fields are Mandatory'})
        }
        const customerExist = await Customer.findOne({email:email})
        if(customerExist){
            return res.status(422).json({error:'User already registered'})
        }
        const vehicleData = new Customer({
            name , email , contact
        })
        vehicleData.save();
        res.status(200).json("User has been registered");
    } catch (error) {
        console.log("error ",error);
        res.status(404).json("Error")
    }
}

