const express = require('express');
const cors = require('cors');
const MovieData = require('./constant')

const app = express();
app.use(cors());

app.get('/list', (req, res) => {
   res.json(MovieData);
});

app.get('/details/:id', (req, res) => {
    const getData = MovieData.find(d => d.id === Number(req.params.id))
    if(!getData) return res.status(500).send('No record found')
    res.json(getData)
});

app.listen(7000, () => {
    console.log('List API running on port 7000');
});