# The Tool Shed Web Application

Welcome to The Tool Shed, a neighborhood tool-sharing platform! This web application allows users to view, borrow, and return tools within their community. The project consists of a front-end written in HTML, CSS, and JavaScript, and a back-end server using Node.js and Express.

## Contents

- [Files](#files)
- [Features](#features)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Files

- **index.html:** The main HTML file containing the structure of the web page.
- **styles.css:** The CSS file providing styles for the web page.
- **main.js:** The JavaScript file handling the dynamic behavior of the web page.
- **index.js:** The entry point for the server using Express.
- **controller.js:** The module containing server-side logic for handling requests.
- **availableDB.json:** JSON file serving as the initial database of available tools.

## Features

1. View available tools with details such as owner name, image, and tool name.
2. Add a new tool to the shed with an image URL, tool name, and owner name.
3. Borrow a tool by providing the borrower's name.
4. Return a borrowed tool to make it available again.

## Getting Started
1. Clone the repository.
git clone <repository-url>
2. Intall dependencies.
npm install
3. Run the server.
nodemon server/index.js
4. Open index.html in a web browser.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.

## API Endpoints

```markdown
- **GET /api/toolsAvailable:** Retrieve a list of available tools.
- **DELETE /api/toolsAvailable/:id:** Delete a tool by ID.
- **POST /api/toolsAvailable:** Add a new tool to the available tools.
- **POST /api/borrowTool/:id:** Borrow a tool by providing the borrower's name.
- **GET /api/borrowedTools:** Retrieve a list of borrowed tools.
- **POST /api/returnTool/:id:** Return a borrowed tool to make it available again.

## Database
The initial database of available tools is stored in the `availableDB.json` file. The server reads from and modifies this file to manage tools.