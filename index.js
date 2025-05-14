const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Dota');
});

app.get('/example', (req, res) => {
    res.send('Example');
});


app.get('/dizzy', (req, res) => {
    res.send('Dizzy');
});

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(3500);

console.log('Perrida en ${3500}');
