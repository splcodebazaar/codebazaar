/* ==========================================
    importing modules & initializing port
===========================================*/

const exp = require('constants');
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const port = process.env.PORT || 4500;

/* ==========================================
            API Middlewares set01
===========================================*/

const app = express();
// const staticFiles = path.join(__dirname, 'codebazaar_Apps');
const templateFiles = path.join(__dirname, 'codebazaar_Apps/templates');

/* ==========================================
            API Middlewares set02
===========================================*/

app.use(express.json());
app.use(express.urlencoded());
// app.use(express.static(staticFiles));

/* ==========================================
        API view-engine Directory
===========================================*/

app.set('view engine', 'ejs');
app.set('views', templateFiles);

/* ==========================================
            API Server & Routes
===========================================*/

app.listen(port, () => {

    console.log(`SERVER STARTED at 127.0.0.1:${port}`);
})

app.get('/', (request, respond) => { 
    respond.render('home') 
});

// nodemon serverRoutings.js