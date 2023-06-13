const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Plant Blueprint
const plantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Tomato", "Pepper", "Herbs"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: String

})

module.exports = mongoose.model("Plant", plantSchema)