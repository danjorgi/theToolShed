const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getTools,
    deleteTool,
    createTool
} = require('./controller');

app.get('/api/toolsAvailable', getTools)
app.delete(`/api/toolsAvailable/:id`, deleteTool)
app.post('/api/toolsAvailable', createTool)


const port = 4004

app.listen(4004, () => {
    console.log(`Server is running on port ${port}`);
});