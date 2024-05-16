// Create web server
// 1. npm init -y
// 2. npm install express
// 3. npm install nodemon --save-dev

// Import express
const express = require('express');
// Import fs
const fs = require('fs');
// Create express app
const app = express();
// Create port number
const port = 3000;
// Create data variable
let data = require('./data.json');

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(data);
});

// Create a route to get comment by id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = data.find((comment) => comment.id === id);
    res.json(comment);
});

// Create a route to add a comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: '4',
