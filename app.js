
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configdb');
const route = require('./server/routes');

//Conect DB
db.connect();

const app = express();
const port = 3456;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set up route;
route(app);

app.listen(port, (request, response) => {
    console.log(`Listen port is ${port}`)
});
