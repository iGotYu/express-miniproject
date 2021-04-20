const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const tables = [{
    routeName: "table_1",
    name: "Trent",
    phone_number: "555-5555",
    email: "example@email.com",
    id: 1,
},
{
    routeName: "table_2",
    name: "Brent",
    phone_number: "666-6666",
    email: "example@email.com",
    id: 2,
},
{
    routeName: "table_3",
    name: "Grent",
    phone_number: "777-7777",
    email: "example@email.com",
    id: 3,
}
];

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "html/home.html"));
})