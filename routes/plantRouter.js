const express = require("express")
const plantRouter = express.Router()
const Plant = require("../models/plant.js")

//get all plants

plantRouter.get("/", (req, res, next)=>{
    Plant.find((err, plants)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(plants)
    })
})

//add plants to database
plantRouter.post("/", (req, res, next)=>{
    const newPlant = new Plant(req.body)
    newPlant.save((err, savedPlant)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedPlant)
    })
})

plantRouter.get("/search/type", (req, res, next)=>{
    Plant.find({type: req.query.type}, (err, plants)=>{
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(200).send(plants)
    })
 })
 

// plantRouter.delete("/:plantId", (req, res)=>{
//     Plant.findOneAndDelete({_id: req.params.plantId},(err, deletedItem)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`Successfully deleted ${deletedItem.title}`)
//         })
//     })
module.exports = plantRouter