const Joke = require("../models/joke.model");

//BASIC CRUD COMMANDS

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong when creating a Joke!", error: err}))
}

// READ ONE
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
    .then(singleJoke => res.json(singleJoke))
    .catch(err => res.json({message: "Something went wrong while finding one joke", error: err}))
}

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json(allJokes))
    .catch(err => res.json({message: "Something went wrong while finding all jokes", error: err}))
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(updateJoke => res.json(updateJoke))
    .catch(err => res.json({message: "Something went wrong while updating one joke", error: err}))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then(deleteJoke => res.json(deleteJoke))
    .catch(err => res.json({message: "Something went wrong while deleting one joke", error: err}))
}