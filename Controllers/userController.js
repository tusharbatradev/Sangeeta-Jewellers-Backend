const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const secretKey = require('../utils')
const jwt = require('jsonwebtoken')

// Function to handle User Registration
async function registration(req, res) {
    try {
        const { username, name, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            name,
            password: hashedPassword
        })
        if (user) {
            return res.json({
                user: user,
                msg: 'User Created'
            })
        }
        console.log(user)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

// Function to handle get all User
async function getUser(req, res) {
    try {
        const user = await User.find({})
        console.log("User", user)
        if (user)
            res.status(200).json({ user: user })
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
}

// Function to generate JWT Token 
async function generateToken(user) {
    const payload = {
        userId: user._id,
        username: user.username
    }
    const token = jwt.sign(payload, secretKey, { expiresIn: '2h' })
    return token
}

// Function to handle Login User
async function loginUser(req, res) {
    try {
        const { username, name, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                msg: 'User Not found'
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({
                msg: 'Password is incorrect'
            })
        }
        const token = await generateToken(user);
        console.log(token)

        res.status(200).json({
            token: token,
            username: username,
            msg: 'User Login Successfully'
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
}

// Middleware function to authenticate user using JWT token
async function authenticateUser(req, res, next) {
    const token = req.headers.authorization;
    console.log("Token", token)

    if (!token) {
        return res.status(404).send('Unauthorized')
    };

    jwt.verify(token, secretKey, (error, data) => {
        if (error) {
            return res.status(403).send('Forbidden');
        }
        req.user = data;
        next()
    })
}

module.exports = {
    registration,
    getUser,
    generateToken,
    loginUser,
    authenticateUser
}
