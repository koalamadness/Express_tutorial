const express = require('express');
const morgan = require('morgan');

const app = express();
// use path
app.use(express.json());
app.use(morgan('dev'));


app.get('/note.txt', (req, res) => {
    res.send(`Jaimicazo pero exquisito`);
});


app.all('/about', (req, res) => {
    console.log(req.body);
    res.send(`about`);
});


app.get('/all', (req, res) => {
    res.send(`DOTA`);
});

app.use("/public", express.static('./public'));
app.use("/uploads", express.static('./uploads'));
//app.use("/uploads", express.static(path.join(__dirname, 'uploads')));



app.listen(3500);

console.log('Perrida en ${3500}');
