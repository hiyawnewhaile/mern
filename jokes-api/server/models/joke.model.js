const mongoose = require('mongoose');

const JokeShema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is Required!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is Required!"]
    },
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeShema);

module.exports = Joke;