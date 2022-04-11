const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const thingController = require('./controllers/thingController');


app.get('/', (req, res) => {
    res.send('Hello!');
})

app.get('/user', thingController.thing)

app.listen(port, () => {
    console.log('Le server écoute sur le port ' + port)
})