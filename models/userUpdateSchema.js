const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const usersUpdate = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    }
})

// Creating Model


const updateUser = new mongoose.model("update", usersUpdate)


module.exports = updateUser;