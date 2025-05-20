const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.all('/about', (req, res) => {
    console.log(req.body);
    res.send(`about`);
});


app.use((req, res, next) => {

    if(req.query.login === 'jaimico'){
        next();
    }
    else{
        res.send("Nel");
    }
});

app.get('/all', (req, res) => {
    res.send(`DOTA`);
});


app.listen(3500);

console.log('Perrida en ${3500}');
