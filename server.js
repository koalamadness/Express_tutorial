const express = require('express');
const morgan = require('morgan');

const app = express();
const products = [
    {
        id: 1,
        name: "uriel",
        price: 200
    } 
        ]

app.use(morgan('dev'));
app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1};
    products.push(newProduct);
    res.send(newProduct);
});

app.put('/products', (req, res) => {
    res.send(`Updating products`);
});

app.delete('/products', (req, res) => {
    res.send(`Deleting products`);
});

app.get('/products/:id', (req, res) => {
    const productFound = products.find(function (product) {
        return product.id == req.params.id;
    });

    if (!productFound) return res.status(404).json({
        "message": "Not Found"
    });
    console.log(productFound);
    res.json(productFound);
});


app.listen(3500);

console.log('Perrida en ${3500}');
