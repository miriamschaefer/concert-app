import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
const mongoUri = 'mongodb+srv://msuarezmelian:Wj0PblWekOj2cVg7@concertdb.0tk1w.mongodb.net/concert-API?retryWrites=true&w=majority&appName=ConcertDB';
const portBack = 2000;
console.log(mongoUri);
const app = express();
app.use(express.json());
console.log('hi', mongoUri);
// Endpoint de prueba
app.get('/', (req, res) => {
    res.send('Response from node api :)');
});
// Endpoint para recibir datos de conciertos
app.post('/api/concerts', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
mongoose.connect(mongoUri)
    .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(portBack, () => {
        console.log('Server running on port 2000');
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
