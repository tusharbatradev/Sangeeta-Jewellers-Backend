const express = require('express');
const router = express.Router();

// Importing controllers for handling Product operation
const {
    handleGetAllProducts,
    handlePost,
    handleGetbyId,
    handlePatch,
    handleDeletebyId,
    handleDeleteAll
} = require('../Controllers/controllers')

// Importing user authentication middleware
const { authenticateUser } = require("../Controllers/userController")

//Route to handle post request for a product
router.post('/', authenticateUser, handlePost);

//Route to handle get all products
router.get('/', authenticateUser, handleGetAllProducts)

//Route to handle get a product by it's id
router.get('/:id', authenticateUser, handleGetbyId)

//Route to handle update a product by it's id
router.patch('/:id', authenticateUser, handlePatch)

//Route to handle delete a product by it's id
router.delete('/:id', authenticateUser, handleDeletebyId)

//Route to handle delete all products
router.delete('/', authenticateUser, handleDeleteAll)

module.exports = router