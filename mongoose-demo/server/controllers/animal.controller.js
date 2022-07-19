const Animal = require("../models/animal.model");

//BASIC CRUD COMMANDS

// CREATE
module.exports.createAnimal = (req, res) => {
    Animal.create(req.body)
        .then(newAnimal => res.json(newAnimal))
        .catch(err => res.json({message: "Something went wrong when creating an animal!", error: err}))
}

// READ ONE
module.exports.findOneAnimal = (req, res) => {
    Animal.find({_id: req.params._id})
    .then(singleAnimal => res.json(singleAnimal))
    .catch(err => res.json({message: "Something went wrong while finding one animal", error: err}))
}

// READ ALL
module.exports.findAllAnimals = (req, res) => {
    Animal.find()
    .then(allAnimal => res.json(allAnimal))
    .catch(err => res.json({message: "Something went wrong while finding all animal", error: err}))
}

// UPDATE
module.exports.updateAnimal = (req, res) => {
    Animal.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(updateAnimal => res.json(updateAnimal))
    .catch(err => res.json({message: "Something went wrong while updating one animal", error: err}))
}

// DELETE
module.exports.deleteAnimal = (req, res) => {
    Animal.deleteOne({_id: req.params._id})
    .then(deleteAnimal => res.json(deleteAnimal))
    .catch(err => res.json({message: "Something went wrong while deleting one animal", error: err}))
}