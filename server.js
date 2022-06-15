require('dotenv').config();
require('./config/database');
const cors = require('cors');
const express = require('express');
const Router = require('./Routes/routes');
const app = express();

const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', Router);

app.get('/', (req, res) => {
    res.send('Hello World!');
    })

app.listen(PORT, () => console.log(`Server is running on port` + PORT));


