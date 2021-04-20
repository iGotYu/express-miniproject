const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

let tables = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"home.html"))
})

app.get("tables", (req, res) => {
    res.sendFile(path.join(__dirname, 'table.html'));
})

app.get("form", (req, res) => {
    res.sendFile(path.join(__dirname,'form.html'));
})

