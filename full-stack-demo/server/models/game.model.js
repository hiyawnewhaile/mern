const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
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
}, { timestamps: true });

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;