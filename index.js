const express = require("express");
const cors=require("cors");
const app = express();
//Parse the body
app.use(express.json());
app.use(cors())

// Importing MongoDb connection function
const {ConnectMongodb} = require('./connection')

// Mongo URL
const mongoUrl = `mongodb+srv://tusharbatra08:tush12345@practise.beheei4.mongodb.net/?retryWrites=true&w=majority&appName=Practise`

// Connection MongoDB
ConnectMongodb(mongoUrl)

const port = 3001;

// Importing Routers
const productsRouter = require('./Routes/products');
const userRouter=require("./Routes/userRouter")
const invoiceRouter=require('./Routes/invoiceRouter')

// Routes for different resources
app.use("/product", productsRouter)
app.use("/user",userRouter)
app.use('/invoice',invoiceRouter)

// Starting Server
app.listen(port, () => console.log(`Server started on port ${port}`))




