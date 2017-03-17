'use strict';

const express = require('express');
const opn = require('opn');

const app = express();
const PORT = process.env.PORT || 4400;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    try {
        opn('http://127.0.0.1:'+PORT);
    } catch(err){
        console.log(err)
    }
});

