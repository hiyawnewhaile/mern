// bring in mongoose so we can properly create a schema
const mongoose = require('mongoose');

// We make our model
const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be atleast 2 characters!"]
    },
    fact: {
        type: String,
        required: [true, "Fact is required!"],
    },
}, {timestamps: true});

// Finalize making the model
const Animal = mongoose.model("Animal", AnimalSchema);

// We nned to export the table to other areas of my project
module.exports = Animal;