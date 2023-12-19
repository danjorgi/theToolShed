let tools = require("./db.json");
let globalId = 3;

module.exports = {
    getTools: (req, res) => {
        res.status(200).send(tools)
    },
    createTool: (req, res) => {
        const { imageURL, toolName, ownerName } = req.body;

        if (!imageURL || !toolName || !ownerName) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newTool = {
            id: globalId,
            imageURL,
            toolName,
            ownerName,
        };

        tools.push(newTool);
        globalId++;

        res.status(201).json(newTool);
    },
    deleteTool: (req, res) => {
        let index = tools.findIndex(elem => elem.id === +req.params.id)
        tools.splice(index, 1)
        res.status(200).send(tools)
    }
};