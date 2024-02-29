const Invoice = require('../Models/invoiceModel');

// Function to handle Create Invoice
async function createInvoice(req, res) {

    try {
        const { customer, products, invoice, oldGold, oldSilver } = req.body;

        const myInvoice = await Invoice.create({ customer, products, invoice, oldGold, oldSilver });
        console.log("New Invoice:", myInvoice);

        res.json({ invoice: myInvoice });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
}

// Function to handle get all Invoices
async function getAllInvoice(req, res) {
    try {
        const invoice = await Invoice.find({})
        res.status(200).json({
            msg: 'All Invoices',
            invoice: invoice
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
}

// Function to handle get invoice by Id
async function getInvoice(req, res) {
    try {
        const id = req.params.id.trim();
        const invoice = await Invoice.findById(id);
        if (invoice) {
            return res.json({
                msg: 'Your Invoice',
                invoice: invoice
            })
        }
        else {
            return res.json({ msg: 'No such Invoice' })
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

// Function to handle update the Invoice by id
async function updateInvoice(req, res) {
    try {
        const id = req.params.id.trim();
        const body = req.body;
        console.log("Body", body);


        const updatedInvoice = await Invoice.findByIdAndUpdate(id, {
            ...body
        }, { new: true });
        res.json({
            msg: 'Invoice Updated',
            invoice: updatedInvoice
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

// Function to handle delete invoice by id
async function deleteInvoice(req, res) {
    try {
        const id = req.params.id.trim();
        const { customerFirstName, customerLastName, customerContact, customerAddress, customerCity, customerPincode, productWeight, productCost, amountPaid } = req.body;

        const remainingBalance = productCost - amountPaid;

        const deletedInvoice = await Invoice.findByIdAndDelete(id, {
            customerFirstName,
            customerLastName,
            customerContact,
            customerAddress,
            customerCity,
            customerPincode,
            productWeight,
            productCost,
            amountPaid,
            remainingBalance
        });
        res.json({
            msg: 'Deleted Invoice',
            invoice: deletedInvoice
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createInvoice,
    getAllInvoice,
    getInvoice,
    updateInvoice,
    deleteInvoice
};

