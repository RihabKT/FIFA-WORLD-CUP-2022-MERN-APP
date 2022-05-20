// import mongoose
const express = require("express")

//import connectDB
const connectDB = require("./config/connectDB")

//import team from routes
const team = require ("./routes/team")



//initiate express
const app = express()



//parse data
app.use(express.json())


//3-define routes
app.use("/api/rihab/fifa2022", team)


//2-connect database
connectDB()

//1-run server
const port = process.env.PORT || 1000
app.listen(port, err =>{
    err? console.log(err) : console.log(`THE SERVER IS RUNNING SUCCESSFULLY ON PORT ${port}`)
})












