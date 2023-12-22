let tools = require("./availableDB.json");
let globalId = tools.length > 0 ? Math.max(...tools.map(tool => tool.id)) + 1 : 1;
let borrowedTools = [];

module.exports = {
    getTools: (req, res) => {
        res.status(200).send(tools);
    },
    deleteTool: (req, res) => {
        let index = tools.findIndex(elem => elem.id === +req.params.id);
        if (index !== -1 ) {
            tools.splice(index, 1);
            res.status(200).send(tools);
        } else {
            res.status(404).json({error: 'Tool not found'});
        }
    },
    createTool: (req, res) => {
        console.log('Received request:', req.body);
        let {imageURL, toolName, ownerName} = req.body;
        let newTool = {
            id: globalId,
            imageURL,
            toolName,
            ownerName
        }
        tools.push(newTool);
        res.status(200).send(tools);
        globalId++;
    },
    borrowTool: (req, res) => {
        const id = +req.params.id;
        const toolIndex = tools.findIndex(tool => tool.id === id);
        if (toolIndex !== -1) {
            const borrowedTool = tools.splice(toolIndex, 1)[0];
            borrowedTools.push(borrowedTool);
            res.status(200).send(borrowedTools);
        } else {
            res.status(404).json({error: 'Tool not found'});
        }
    },
    getBorrowedTools: (req, res) => {
        res.status(200).send(borrowedTools);
    },
    returnTool: (req, res) => {
        const id = +req.params.id;
        const borrowedToolIndex = borrowedTools.findIndex(tool => tool.id === id);

        if (borrowedToolIndex !== -1) {
            const returnedTool = borrowedTools.splice(borrowedToolIndex, 1)[0];
            tools.push(returnedTool);
            res.status(200).send(returnedTool);
        } 
    }
};