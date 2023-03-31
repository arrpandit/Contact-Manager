const express = require('express')
require('dotenv').config()

const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')
const app = express()
const port = process.env.PORT || 5000
connectDB()




app.use(bodyParser.json()) //    /or use  app.use(express.json())
app.use("/api/contact", require('./routes/contactRoute'))
app.use(errorHandler)


app.listen(port ,()=>{
    console.log(`server running PORT : ${port}`)
})