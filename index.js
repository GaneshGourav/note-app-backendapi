const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT||7700;
require("dotenv").config();

const {connection} = require("./db")

const app = express();

 app.use(express.json())
 app.use(cors());



 app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("connected to DBS")
        console.log(`port is running at ${PORT}`)
    } catch (error) {
        console.log(error)
    }
 })