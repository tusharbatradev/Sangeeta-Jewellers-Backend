const express = require("express");
const cors=require("cors");
const app = express();
require("dotenv").config();
//Parse the body
app.use(express.json());
app.use(cors())

// Importing MongoDb connection function
const {ConnectMongodb} = require('./connection')

// Mongo URL
const mongoUrl = process.env.MONGODB_URL;

// Connection MongoDB
ConnectMongodb(mongoUrl)

// Importing Routers
const productsRouter = require('./Routes/products');
const userRouter=require("./Routes/userRouter")
const invoiceRouter=require('./Routes/invoiceRouter')

// Routes for different resources
app.use("/product", productsRouter)
app.use("/user",userRouter)
app.use('/invoice',invoiceRouter)

// Starting Server
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server started on port ${port}`))




