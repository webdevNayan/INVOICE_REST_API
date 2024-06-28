require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create the Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const invoices = require('./routes/invoices');

// Use routes
app.use('/api/invoices', invoices);

// Define a simple route
app.get('/', (req, res) => {
    res.send('Invoice Generator API');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
