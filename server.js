const express = require('express');
const bodyParser = require('body-parser');
const Sound = require('node-aplay');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------------------------------------------------------

app.get('/', (req, res) => {
    const music = new Sound('./sounds/2bells.wav');
    res.send('Playing 2bells.wav');
    music.play();
});

const port = 3000;// TODO: config this

app.listen(port, () => console.log(`ClockTower app listening on port ${port}!`))
