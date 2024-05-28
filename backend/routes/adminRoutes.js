const express = require('express');

const router = express.Router();

// Define your routes
router.post('/customize', (req, res) => {
    const receivedData = req.body;
    console.log('Received data', receivedData)
    res.status(201).send('Data received successfully')});

module.exports = router;
