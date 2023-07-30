const express = require('express');
const db = require('./mongoose/mogooose');
const cors = require('cors');
const { vehicleRegister } = require('./controllers/vehicles/vehicleRegister');
const { deleteVehicle } = require('./controllers/vehicles/deleteVehicle');
const { updateVehicle } = require('./controllers/vehicles/updateVehicle');
const { findVehicle } = require('./controllers/vehicles/findVehical');
const { customerRegister } = require('./controllers/customer/customerRegister');
const { deleteCustomer } = require('./controllers/customer/deleteCustomer');
const { updateCustomer } = require('./controllers/customer/updateCustomer');
const { bookVehicle } = require('./controllers/bookings/bookVehicle');
const { viewBookings } = require('./controllers/bookings/viewBookings');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',function(req, res){
    res.send('Welcome to Vehicle Rental Management')
})
// Vehicle  API data
app.post('/vehicle', vehicleRegister);
app.post('/deleteVehicle/:id', deleteVehicle);
app.patch('/updateVehicle/:id' , updateVehicle);
app.get('/findVehicle', findVehicle);

// Customer  API data
app.post('/signup', customerRegister);
app.post('/deleteCustomer/:id', deleteCustomer);
app.patch('/updateCustomer/:id', updateCustomer);

//booking API data 
app.post('/book',bookVehicle);
app.get('/mybookings/:user',viewBookings);

//Mark Vehicle Under Maintenance
app.patch('/vehicleStatus/:id', updateVehicle);


app.listen(PORT, function(err){
    if(err){
        throw new err
    }
    console.log("Express Server is Running on PORT: ",PORT);
})