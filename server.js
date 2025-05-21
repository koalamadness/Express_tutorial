const express = require('express');
const morgan = require('morgan');

const app = express();
let products = [
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
    console.log(req.body);
    const newProduct = {...req.body, id: products.length + 1};
    products.push(newProduct);
    res.send(newProduct);
});

app.put('/products/:id', (req, res) => {
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
    );

    if (!productFound) 
        return res.status(404).json({
        "message": "Not Found"
    });

    productFound.name = req.body.name;
    productFound.price = req.body.price;

    res.send(`Updating product`);
});

app.delete('/products/:id', (req, res) => {
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
    );

    if (!productFound) 
        return res.status(404).json({
        "message": "Not Found"
    });

    products  = products.filter(p => p.id !== parseInt(req.params.id));

    res.sendStatus(204);
});

app.get('/products/:id', (req, res) => {
    const productFound = products.find(function (product) {
        return product.id == req.params.id;
    });

    if (!productFound) 
        return res.status(404).json({
        "message": "Not Found"
    });
    console.log(productFound);
    res.json(productFound);
});


app.listen(3500);

console.log('Perrida en ${3500}');
