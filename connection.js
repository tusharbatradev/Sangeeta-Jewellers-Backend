// connection.js
const mongoose = require('mongoose');

async function ConnectMongodb(url){
    try {
        await mongoose.connect(url);
        console.log('MongoDb Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {
    ConnectMongodb,
};
