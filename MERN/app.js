<<<<<<< HEAD:app.js
const express = require('express');
const mongoose = require('mongoose');
const router = require("./src/api/api");
const path = require("path");
const cors = require("cors");
const app= new express();
require('dotenv').config();


app.use(cors());
=======
const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/api/api");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = new express();
dotenv.config();

>>>>>>> 7603fb5c9c9d87422d4700b71db4d5c9096f96c7:MERN/app.js
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const url = process.env.MongoDBUrl;
const options = {user:"", pass:"", autoIndex:true};
mongoose.connect(url, options).then((res)=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log("Error connecting to Database", err);
});



app.use("/api/v2", router);

app.use(express.static("frontend/dist"));
app.get(/.*/,(req, res)=>{
    res.sendFile(path.resolve(__dirname,'frontend', 'dist', 'index.html'));
})



app.listen(8080, ()=>{console.log("Server is running on port 8080")});
