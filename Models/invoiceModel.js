const mongoose = require("mongoose");

// Defining Schema for Customer Details
const customerSchema = new mongoose.Schema({
    customerFirstName: {
        type: String,
        required: true
    },
    customerLastName: {
        type: String,
        required: true,
    },
    customerContact: {
        type: String,
        required: true,  
    },
    customerAddress: {
        type: String,
        required: true
    },
    customerCity: {
        type: String,
        required: true
    },
    customerPincode: {
        type: String,
        required: true
    }
})

// Defining Schema for Products Details
const productSchema = new mongoose.Schema({
    product: {
        type: String,
        require: true
    },
    productWeight: {
        type: Number,
        required: true
    },
    productCost: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    makingCharges: {
        type: Number,
        require: true
    },
    productId: {
        type: String
    },
    productAmount: {
        type: Number,
        // require: true
    }
})

// Defining Schema for Invoice Details
const invoiceSchema = new mongoose.Schema({
    grandTotal: {
        type: Number,
        required : true
    },
    gst :{
        type: Number
    },
    discount: {
        type: Number
    },
    amountPaid: {
        type: Number,
        required: true
    },
    remainingBalance: {
        type: Number
    },
    date: {
        type: Date,
    }
})

// Defining Schema for Old Product(Selling) Details
const oldProductSchema = new mongoose.Schema({
    weight : {
        type : Number
    },
    cost : {
        type : Number
    }
})

// Comibining all above Schema's in the combinedSchema. 
const combinedSchema = new mongoose.Schema({
    customer : customerSchema,
    products : [productSchema],
    invoice : invoiceSchema,
    oldGold : oldProductSchema,
    oldSilver : oldProductSchema
})

// Creating Model from Invoice's Schema
const Invoice = mongoose.model("invoice", combinedSchema);
module.exports = Invoice;