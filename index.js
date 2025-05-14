const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Heavy is the crown');
});

app.get('/miarchivo', (req, res) => {
    res.sendFile('Actions.png', {
        root: __dirname
    });
});

app.get('/user', (req, res) => {
    res.json({"name":"crown"});
});

app.get('/isAlive', (req, res) => {
    res.sendStatus(204);
});

app.listen(3500);

console.log('Perrida en ${3500}');
