const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getTools,
    deleteTool,
    createTool,
    borrowTool,
    getBorrowedTools,
    returnTool
} = require('./controller');

app.get('/api/toolsAvailable', getTools);
app.delete(`/api/toolsAvailable/:id`, deleteTool);
app.post('/api/toolsAvailable', createTool);
app.post('/api/borrowTool/:id', borrowTool);
app.get('/api/borrowedTools', getBorrowedTools);
app.post('/api/returnTool/:id', returnTool);

const port = 4004

app.listen(4004, () => {
    console.log(`Server is running on port ${port}`);
});