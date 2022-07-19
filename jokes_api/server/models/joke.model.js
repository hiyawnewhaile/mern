const mongoose = require('mongoose');

const JokeShema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeShema);

module.exports = Joke;