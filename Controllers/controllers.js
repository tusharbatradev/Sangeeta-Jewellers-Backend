const Product = require('../Models/models')

// Function to handle get all products
async function handleGetAllProducts(req, res) {
    try {
        const products = await Product.find({});
        if (!products || products.length === 0) {
            return res.json({
                msg: 'No Products here'
            })
        }
        res.json(products);
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            msg: 'Internal Server error',
        })
    }
}

// Function to handle get aproduct by Id
async function handleGetbyId(req, res) {
    try {
        const id = req.params.id.trim();
        const product = await Product.findById(id);
        if (!product) {
            return res.json({
                msg: 'No Product Found'
            })
        }
        res.json(product);
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            msg: 'Internal Server error',
        })
    }
}

// Function to handle Create a product
async function handlePost(req,res){
    try {
        let body = req.body;
        if (!body || body.productName === undefined || body.availability === undefined) {
            res.status(422).json({
                msg: "Missing Details"
            });
        } else {
            const productResult = await Product.create({
                productName: body.productName,
                availability: body.availability
            });
            res.json({
                msg: "Product is Added"
            });
        }
    } catch (error) {
        console.error('Error adding product:', error.message);
        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}

// Function to handle update Product by id
async function handlePatch(req, res) {
    try {
        const id = req.params.id.trim();
        const body = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { ...body });
        if (!updatedProduct) {
            return res.json({
                msg: 'No Product Found'
            })
        }
        res.json({
            id: id,
            msg: 'Product Updated'
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            msg: 'Internal Server error',
        })
    }
}

// Function to handle delete product by Id
async function handleDeletebyId(req, res) {
    try {
        const id = req.params.id.trim();
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            res.json({
                msg: 'No Product Found'
            })
        }
        res.json({
            id: id,
            msg: 'Product Deleted'
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            msg: 'Internal Server error',
        })
    }
}

// Function to handle delete all products
async function handleDeleteAll(req, res) {
    try {
        await Product.deleteMany({});
        res.json({
            msg: 'All Products Deleted',
            products: Product
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            msg: 'Internal Server error',
        })
    }

}

module.exports = {
    handleGetAllProducts,
    handlePost,
    handleGetbyId,
    handlePatch,
    handleDeletebyId,
    handleDeleteAll
}