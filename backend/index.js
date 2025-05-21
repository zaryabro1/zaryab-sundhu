const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Zaryab Sundhu Backend API' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
