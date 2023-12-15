const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const port = 4004

app.listen(4004, () => {
    console.log(`Server is running on port ${port}`);
});