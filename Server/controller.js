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
            imageURL,
            toolName,
            ownerName,
        };

        tools.push(newTool);

        res.status(201).json(newTool);
    }
}