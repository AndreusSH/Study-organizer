const dotenv = require('dotenv'); // Import and configure dotenv
const express = require('express'); // Import express
const http = require('http'); // Import http module

dotenv.config()
const port = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)


//Start the server
server.listen(port, ()=> {
    console.log(`Server was started at PORT ${port}`)
})