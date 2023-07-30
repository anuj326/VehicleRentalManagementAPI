const Booking = require('../../model/Booking');

module.exports.viewBookings = async function(req, res){

    try {
        const name = req.params.user; 
        // const today = new Date();
        // const year = today.getFullYear();
        // const month = String(today.getMonth() + 1).padStart(2, '0'); 
        // const day = String(today.getDate()).padStart(2, '0');

        // const todayDate = `${day}/${month}/${year}`;
        // console.log(todayDate);

        const bookingData = await Booking.find({name});
        res.status(200).json(bookingData);
    } catch (error) {
        console.log("error in Fetching data",error);
        res.status(404).json("Error in Fetching data  ")
    }

}