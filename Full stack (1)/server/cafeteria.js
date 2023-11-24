const mongoose = require('mongoose')

const cafeteriaSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    
})


mongoose.model("cafeteria",cafeteriaSchema)
