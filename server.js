const express = require('express');
const bodyParser = require('body-parser');
const Sound = require('node-aplay');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------------------------------------------------------

app.get('/', (req, res) => {
    const music = new Sound('./sounds/2bells.wav');
    const timeStamp = Math.floor(Date.now() / 1000)
    console.log(`${timeStamp} - Received request`)
    res.send('Playing 2bells.wav');
    music.play();
});

const port = 3000;// TODO: config this

let timeStamp = Math.floor(Date.now() / 1000)
app.listen(port, () => console.log(`${timeStamp} - ClockTower app listening on port ${port}!`))
