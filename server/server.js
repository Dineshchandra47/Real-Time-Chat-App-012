const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const authRoutes = require("./routes/auth")
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to Database Successfully')
}).catch((error)=>{
  console.log(error.message)
})


const server = app.listen(process.env.PORT, ()=>{
  console.log(`Server is up and running at https://localhost:${process.env.PORT}`)
})