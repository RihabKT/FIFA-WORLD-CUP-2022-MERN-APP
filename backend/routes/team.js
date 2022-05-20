//import express
const express = require("express")

// import team from models
const Team = require("../models/team")

//define router
const router = express.Router()


//ADD NEW TEAMS USING POST METHOD
//API: localhost:1000/api/rihab/fifa2022
router.post("/", (req,res) => {
    const newTeam = new Team ({...req.body}) 
    newTeam.save()

    .then(team => res.status(200).json(team))
    .catch(err => res.status(400).json(err))
})


//FIND ALL TEAMS USING GET METHOD
//API: localhost:1000/api/rihab/fifa2022
router.get("/",(req,res) => {
    Team.find()

    .then(teams => res.send(teams))
    .catch(err => res.send(err))
})

//GET TEAM BY ID
router.get('/:_id', (req, res) => {
    let { _id } = req.params
    Team.find({ _id })
        .then(Team => res.send(Team))
        .catch(err => res.send(err))
})

//DELETE A TEAM BY ID
router.delete('/:_id', (req, res) => {
    let { _id } = req.params
    Team.findByIdAndDelete(_id)
        .then(() => res.send("THIS TEAM HAS BEEN DELETED!"))
        .catch(err => res.send(err))
})

//UPDATE A TEAM BY ID
router.put('/:_id', (req, res) => {
    let { _id } = req.params
    Team.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("THIS TEAM HAS BEEN UPDATED!"))
        .catch(err => res.send(err))
})





//export router
module.exports = router;