const express = require('express');
const app = express();
const PORT = 4000;
const dbConnection = require('./config/dbConnection');
const { addContact, getContacts } = require("./controller/contactController");

app.use(express.json());
dbConnection();

app.get('/', (req, res) => {
    console.log("req data", req.body);
    res.send("Hey");
});

app.post('/contact', addContact);

app.get('/contact', getContacts);

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
});
