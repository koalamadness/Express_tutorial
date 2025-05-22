const express = require('express');

const router = express.Router();

router.get('/note.txt', (req, res) => {
    res.send(`Jaimicazo pero exquisito`);
});


module.exports = router;
