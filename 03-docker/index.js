const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const publicPath = path.join(__dirname, 'public');
const messageFile = path.join(publicPath, 'message.txt');
const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('/', (req, res) => res.send('hello world'));

app.get('/message', (req, res) => {
    fs.readFile(messageFile, { encoding: 'utf-8'}, (err, data) => {
        if(err) {
            res.status(500).send(err.message);
            return;
        }

        res.send(data);
    });
});

app.post('/message', (req, res) => {
    fs.writeFile(messageFile, req.body.message, { encoding: 'utf-8'}, (err) => {
        if(err) {
            res.status(500).send(err.message);
            return;
        }

        res.sendStatus(201);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));