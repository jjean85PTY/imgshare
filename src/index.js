const express = require('express');
const config = require('./server/config');

//Database connection
require('./database');

const app = config(express());

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server linsten on port', app.get('port'));
})