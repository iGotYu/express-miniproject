const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

let tables = [];
let wait = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./html/home.html"))
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, './html/table.html'));
})

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname,'./html/form.html'));
})

app.get('api/tables', (req, res) => res.json(tables));

app.get('api/wait', (req, res) => res.json(form));

app.get('api/tables/:tables', (req, res) =>{
    const chosen = req.params.tables;

    console.log(chosen);

    for (let i = 0; i < tables.length; i++) {
        if ( chosen === tables[i].routeName){
            return res.json(tables[i]);
        }
    }
    return res.json(false);
})

app.post ("/api/tables", (req, res) => {
    res.json(tables);
})

app.post ("/api/wait", (req, res) => {
    res.json(wait);
})

app.post ("/api/tables", (req, res) =>{
    console.log (req.body.table);
    tables.push(req.body.table);
    res.send(req.body.table);
})

app.post ("/api/form", (req, res) =>{
    console.log (req.body.form);
    wait.push(req.body.form);
    res.send(req.body.form);
})


app.listen(PORT,()=>{
    console.log("listening on port" + PORT)
})
