// models.js
const mongoose = require('mongoose');

// Defining Schema for the Product Details.
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    availability: {
        type: Boolean,
        required: true
    }
});

// Creating Model from the ProductSchema
const Product = mongoose.model('Product', productSchema); // Change 'product' to 'Product'

module.exports = Product;
