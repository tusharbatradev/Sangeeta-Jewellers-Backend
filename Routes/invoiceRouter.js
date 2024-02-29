const express = require('express');
const router = express.Router();

// Importing controllers for handling invoice operation
const {
    createInvoice,
    getInvoice,
    updateInvoice,
    deleteInvoice,
    getAllInvoice
} = require('../Controllers/invoiceController')

// Importing user authentication middleware
const { authenticateUser } = require("../Controllers/userController")

// Route to handle creating a new invoice
router.post('/', authenticateUser, createInvoice)

// Route to handle get a invoice by it's ID
router.get('/:id', authenticateUser, getInvoice)

// Route to handle get all users
router.get('/', authenticateUser, getAllInvoice)

// Route to handle update a invoice by it's ID
router.patch('/:id', authenticateUser, updateInvoice)

// Route to handle delete a invoice by it's id
router.delete('/:id', authenticateUser, deleteInvoice)

module.exports = router