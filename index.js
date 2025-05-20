const express = require('express');

const app = express();


app.get('/hello/:user', (req, res) => {
    res.send(`New user ${req.params.user.toLowerCase()} ${req.params.user} `);
});

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params;
    const result = parseInt(x) + parseInt(y);
    res.send(`Result: ${result}`);
    
});

app.get('/hello/:user/photo', (req, res) => {
    if(req.params.user === "jaimico") {
        return res.sendFile('./Actions.png', {
            root: __dirname
        });
    }

    res.send(`${req.params.user} access not allowed`);
});


app.get('/user/:user/age/:age', (req, res) => {
    const age = parseInt(req.params.age);
    if(age >= 18){
        res.send(`The user ${req.params.user} is ${age} years old and is an adult`);
    }
    else{
        res.send(`The user ${req.params.user} is ${age} years old and is a minor`);
    }
    
});
