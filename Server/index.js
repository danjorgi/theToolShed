const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getTools,
    createTool,
    deleteTool
} = require('./controller');

app.get('/api/toolsAvailable', getTools)
app.post('/api/toolsAvailable', createTool)
app.delete(`/api/toolsAvailable/:id`, deleteTool)


const port = 4004

app.listen(4004, () => {
    console.log(`Server is running on port ${port}`);
});