const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Price must be greater than 0"]
    },
    description: {
        type: String
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;