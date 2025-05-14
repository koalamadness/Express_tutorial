const express = require('express');

const app = express();


app.get('/products', (req, res) => {
    res.send('List of Products');
});

app.post('/products', (req, res) => {
    res.send('Creating Products');
});

app.put('/products', (req, res) => {
    res.send('Updating Products');
});

app.delete('/products', (req, res) => {
    res.send('Deleting Products');
});

app.patch('/products', (req, res) => {
    res.send('Updating some Product');
});




app.listen(3500);

console.log('Perrida en ${3500}');
