
const mongoose = require('mongoose')
require('dotenv').config()

const connectDB =async ()=>{
    try {
        const connect = await mongoose.connect(process.env.Mongo_url)
        console.log("Database connected",connect.connection.host)
        
    } catch (error) {
        console.log("db connection error----")
    }

}

module.exports = connectDB