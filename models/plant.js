const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Movie Blueprint
const plantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Tomato", "Pepper", "Herbs"]
    },
    image: String

})

module.exports = mongoose.model("Plant", plantSchema)