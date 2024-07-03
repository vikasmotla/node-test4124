const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({Name:'vikas Motla'});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});