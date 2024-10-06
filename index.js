const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.use(express.json);

app.get('/', (req, res) => {
    res.send('Response from node api :)');
});

app.post('/api/concerts', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

mongoose.connect('mongodb+srv://msuarezmelian:Wj0PblWekOj2cVg7@concertdb.0tk1w.mongodb.net/concert-API?retryWrites=true&w=majority&appName=ConcertDB')
  .then(() => {
    console.log('Connected!')
    app.listen(2000, () => {
        console.log('server running on port 2000')
    });
})
  .catch(() => console.log('Error'))

