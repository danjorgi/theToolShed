const availableSection = document.querySelector('#available-section');
const form = document.querySelector('#toolAdd');

const baseURL = `http://localhost:4004/api`

const toolsCallback = ({ data: tools }) => displayAvailableTools(tools);
const errCallback = err => console.log(err);

const getAllAvailableTools = () => axios.get(`${baseURL}/tools`).then(toolsCallback).catch(errCallback);

function submitHandler(e) {
    e.preventDefault();

    let imageURL = document.querySelector('#image').value;
    let toolName = document.querySelector('#toolName').value;
    let ownerName = document.querySelector('#ownerName').value;

    let toolObj = {
        imageURL: imageURL,
        toolName: toolName,
        ownerName: ownerName
    };

    createToolCardAvailable(toolObj);

    document.querySelector('#image').value = '';
    document.querySelector('#toolName').value = '';
    document.querySelector('#ownerName').value = '';
}

function createToolCardAvailable(tool) {
    const toolCard = document.createElement('div');
    toolCard.classList.add('toolCardAvailable');

    toolCard.innerHTML = `
    <h5 class="ownerName">Owner: ${tool.ownerName}</h5>
    <img class="toolPic" src="${tool.imageURL}" alt="${tool.toolName}">
    <h4 class="toolName">${tool.toolName}</h4>
    <button class="borrowBtn">Borrow Tool</button>
    <button class="deleteBtn">X</button>
    `

    availableSection.appendChild(toolCard);
}

function displayAvailableTools(arr) {
    availableSection.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createToolCardAvailable(arr[i])
    }
}


form.addEventListener('submit', submitHandler);