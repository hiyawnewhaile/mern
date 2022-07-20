const mongoose = require('mongoose');

const GameShema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required!"]
    },
    art: {
        type: String,
        required: [true, "Game image is Required!"]
    },
    minPlayers: {
        type: Number,
        min: [1, "Atleast 1 person is needed to play a game!"]
    }
}, {timestamps: true});

const Game = mongoose.model("Game", GameShema);

module.exports = Game;