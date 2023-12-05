const express = require('express')
const app = express()
const mongoose = require("mongoose");
const UserModel = require('./models/UserModel');
const bcrypt = require("bcrypt");
const jwt   = require("jsonwebtoken");
const secretKey = "23sf&%T23423sdfasfdaxcvaxfgsadfsdf#O#d;((23234))";

// middlewares
app.use(express.json());


app.get("/", async( req, res) => {
    res.send("working...")
})

// user registration
app.post("/signup", async (req, res) => {
    const {name, email, password } = req.body;
    
    try {
        
        // check is user already registered 
        const alreadyUser = await UserModel.findOne({ email: email});
        if(alreadyUser !== null) {
            return res.status(200).json({
                status: "failed",
                message: "Email already registered"
            });
        }

        // password hashed
        const hashed = await bcrypt.hash(password, 10);

        // create user
        const newUser = await UserModel.create({
            name: name, email: email, password: hashed
        })

        // generate token?
        const token = jwt.sign( {id: newUser._id}, secretKey );

        // return response
        res.status(201).json({
            status: "success",
            message: "Registered successfully",
            token: token
        })

    } catch (error) {
        
    }
})


// user registration
app.post("/login", async (req, res) => {
    const {email, password } = req.body;
    
    try {
        
        // confirm the user is registered or not with email
            const userExist = await UserModel.findOne({email: email});
            if(userExist === null) {
                return res.json({
                    status: "failed",
                    message: "Authentication failed"
                })
            }

        // confirm password
            const confirmPass = await bcrypt.compare(password, userExist.password);
            if(confirmPass === false) {
                return res.json({
                    status: "failed",
                    message: "Authentication failed"
                })
            }

        // generate token
        const token = jwt.sign( {id: userExist._id}, secretKey );

        // return response
        res.status(201).json({
            status: "success",
            message: "Logged in successfully",
             token: token
        })

    } catch (error) {
        
    }
})



// server & DB connection
mongoose.connect("mongodb://127.0.0.1:27017/firstAuth").then(() => {
    app.listen(4000, () => {
        console.log("db connected and server is up now");
    })
})