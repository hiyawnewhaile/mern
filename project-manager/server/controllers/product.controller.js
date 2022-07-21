const Product = require("../models/product.model");

//BASIC CRUD COMMANDS

// CREATE
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({ message: "Something went wrong when creating a Product!", error: err }))
}

// READ ONE
module.exports.findOneProduct = (req, res) => {
    Product.find({ _id: req.params._id })
        .then(singleProduct => res.json(singleProduct))
        .catch(err => res.json({ message: "Something went wrong while finding one Product", error: err }))
}

// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "Something went wrong while finding all Products", error: err }))
}

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json({ message: "Something went wrong while updating one Product", error: err }))
}

// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(deleteProduct => res.json(deleteProduct))
        // There is things we can add to ^^ that will return a message
        .catch(err => res.json({ message: "Something went wrong while deleting one Product", error: err }))
}