// const express = require("express")
// const app = express()
// require("dotenv").config()
// const morgan = require("morgan")
// const mongoose = require("mongoose")
// const {expressjwt} = require('express-jwt');
// const path = require('path')

// //middleware
// app.use(express.json())
// app.use(morgan("dev"))

// //connect to database
// mongoose.connect('mongodb://localhost:27017/plantsdb',{useNewUrlParser: true})
// .then(()=> console.log("Connected to MongoDB"))
// .catch(err => console.error(err));

// //routes
// // app.use('/auth', require('./routes/authRouter.js'))  // route used to generate a token
// // app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // check for token
// app.use("/plants", require("./routes/plantRouter.js")) // authentication based off that token, which gives access to specific routes


// //error handling 
// app.use((err, req, res, next)=> {
//     console.log(err)
//     if(err.name === "UnauthorizedError"){
//         res.status(err.status)
//     }
//     return res.send({errMsg: err.message})
// })

// app.listen(9000, ()=>{
//     console.log("The server is running on Port 9000")
// })