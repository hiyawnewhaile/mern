const Game = require("../models/game.model");

//BASIC CRUD COMMANDS

// CREATE
module.exports.createGame = (req, res) => {
    Game.create(req.body)
        .then(newGame => res.json(newGame))
        .catch(err => res.json({message: "Something went wrong when creating a Game!", error: err}))
}

// READ ONE
module.exports.findOneGame = (req, res) => {
    Game.find({_id: req.params._id})
    .then(singleGame => res.json(singleGame))
    .catch(err => res.json({message: "Something went wrong while finding one Game", error: err}))
}

// READ ALL
module.exports.findAllGames = (req, res) => {
    Game.find()
    .then(allGame => res.json(allGame))
    .catch(err => res.json({message: "Something went wrong while finding all Games", error: err}))
}

// UPDATE
module.exports.updateGame = (req, res) => {
    Game.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
    .then(updateGame => res.json(updateGame))
    .catch(err => res.json({message: "Something went wrong while updating one Game", error: err}))
}

// DELETE
module.exports.deleteGame = (req, res) => {
    Game.deleteOne({_id: req.params._id})
    .then(deleteGame => res.json(deleteGame))
    // There is things we can add to ^^ that will return a message
    .catch(err => res.json({message: "Something went wrong while deleting one Game", error: err}))
}