const express = require('express');
const cors = require('cors');
const eventRoutes = require('./src/routes/eventRoutes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api', eventRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});