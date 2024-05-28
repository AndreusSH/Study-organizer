const dotenv = require('dotenv'); // Import and configure dotenv
const express = require('express'); // Import express
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes.js')

dotenv.config()
const port = process.env.PORT || 5000
const app = express()
//const server = http.createServer(app)

//allow cors for local frontend 
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this domain to access your API
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify which HTTP methods are allowed
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use('/api/users', adminRoutes);
//message for the home page
app.get('/', (req, res) => {
    res.send('This is the home page')
  })

//Start the server
app.listen(port, ()=> {
    console.log(`Server was started at PORT ${port}`)
})