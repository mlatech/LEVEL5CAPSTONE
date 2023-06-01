const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

middleware
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use("/plants", require("./routes/plantRouter.js"))
app.use("/general", require("./routes/generalRouter.js"))

//connect to database
mongoose.connect('mongodb://localhost:27017/plantsdb',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//error handling 
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, ()=>{
    console.log("The server is running on Port 9000")
})