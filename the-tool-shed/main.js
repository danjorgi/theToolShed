const availableSection = document.querySelector('#available-section');
const form = document.querySelector('form');

const baseURL = `http://localhost:4004/api`

const toolsCallback = ({ data: tools }) => displayAvailableTools(tools);
const errCallback = err => console.log(err);

const getAllAvailableTools = () => axios.get(`${baseURL}/toolsAvailable`).then(toolsCallback).catch(errCallback);
const createTool = body => axios.post(`${baseURL}/toolsAvailable`, body)
    .then(response => {
        const createdTool = response.data;
        console.log('Tool created successfully:', response.data);
        toolsCallback(response);
    })
    .catch(err => {
        console.error('Error creating tool:', err);
        errCallback(err);
});
const deleteTool = id => axios.delete(`${baseURL}/toolsAvailable/${id}`).then(toolsCallback).catch(errCallback);

function submitHandler(e) {
    e.preventDefault();
    console.log('Submit handler called');

    let imageURL = document.querySelector('#image').value;
    let toolName = document.querySelector('#toolName').value;
    let ownerName = document.querySelector('#ownerName').value;

    let toolObj = {
        imageURL: imageURL,
        toolName: toolName,
        ownerName: ownerName
    };

    createTool(toolObj);

    document.querySelector('#image').value = '';
    document.querySelector('#toolName').value = '';
    document.querySelector('#ownerName').value = '';
}

function createToolCardAvailable(tool) {
    console.log('Creating tool card:', tool);
    const toolCard = document.createElement('div');
    toolCard.classList.add('toolCardAvailable');

    toolCard.innerHTML = `
    <h5 class="ownerName">Owner: ${tool.ownerName}</h5>
    <img class="toolPic" src="${tool.imageURL}" alt="${tool.toolName}">
    <h4 class="toolName">${tool.toolName}</h4>
    <button class="borrowBtn">Borrow Tool</button>
    <button onclick="deleteTool(${tool.id})" class="deleteBtn">X</button>
    `

    availableSection.appendChild(toolCard);

}

function displayAvailableTools(arr) {
    availableSection.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createToolCardAvailable(arr[i])
    }
}


form.addEventListener('submit', submitHandler);

getAllAvailableTools();