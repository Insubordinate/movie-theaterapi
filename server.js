const express = require('express')
const app = express()

const shows_router = require('./routes/shows')
const users_router = require('./routes/users')

const port = 3000;



// Adds both routers

app.use('/shows',shows_router)
app.use('/users/',users_router)

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})