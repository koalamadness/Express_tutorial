const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('appName', 'JaimicoCourse');
app.set('port', 3500);
app.set('case sensitive routing', true);

app.use(morgan('dev'));
app.use(express.json());

let products = [
    {
        id: 1,
        name: "uriel",
        price: 200
    } 
        ];
    

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
    const newData = req.body;
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
    );

    if (!productFound) 
        return res.status(404).json({
        "message": "Not Found"
    });

    products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData}:p);

    res.json({
        "message": "Updated successfully"
    });
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


const port = app.get('port');

app.listen(port);

console.log(`Perrida de ${app.get('appName')} en ${port}`);
