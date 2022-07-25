const Author = require("../models/author.model");

//BASIC CRUD COMMANDS

// CREATE
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({ message: "Something went wrong when creating a Author!", error: err }))
}

// READ ONE
module.exports.findOneAuthor = (req, res) => {
    Author.find({ _id: req.params._id })
        .then(singleAuthor => res.json(singleAuthor))
        .catch(err => res.json({ message: "Something went wrong while finding one Author", error: err }))
}

// READ ALL
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ message: "Something went wrong while finding all Authors", error: err }))
}

// UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.json({ message: "Something went wrong while updating one Author", error: err }))
}

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(deleteAuthor => res.json(deleteAuthor))
        // There is things we can add to ^^ that will return a message
        .catch(err => res.json({ message: "Something went wrong while deleting one Author", error: err }))
}