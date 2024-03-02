const express = require('express')
const app = express()
const cors = require('cors')
const connectToMongo = require('./db.js')
const admin = require('./Routes/admin')

app.use(cors())
app.use(express.json())
connectToMongo()

app.use('/api',admin)

app.listen(3000,()=>{
    console.log('listening on the port 3000')
})

