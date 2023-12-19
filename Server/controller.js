let tools = require("./availableDB.json");
let globalId = 3;

module.exports = {
    getTools: (req, res) => {
        res.status(200).send(tools)
    },
    deleteTool: (req, res) => {
        let index = tools.findIndex(elem => elem.id === +req.params.id)
        tools.splice(index, 1)
        res.status(200).send(tools)
    },
    createTool: (req, res) => {
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
    }
};