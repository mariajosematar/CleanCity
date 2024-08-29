const express = require('express');
const dotenv = require('dotenv');
const wasteRoutes = require('./routes/wasteRoutes');

dotenv.config();
const app = express();

app.use(express.json());

// Define the base route
app.use('/api/waste', wasteRoutes);

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
