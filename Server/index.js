const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const tools = [];

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const {
    getTools,
    createTool,
} = require('./controller');

app.get('/api/tools', getTools)
app.post('/api/tools', createTool)


const port = 4004

app.listen(4004, () => {
    console.log(`Server is running on port ${port}`);
});