//import mongoose
const mongoose = require("mongoose")


//define schema
const schema = mongoose.Schema

//create schema
const teamSchema = new schema ({

name:{type: String, required:true},
flag: String,
coach:{type: String, required:true},
wonPreviously: Boolean

})

module.exports = team = mongoose.model("team", teamSchema )