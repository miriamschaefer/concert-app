import express, { Request, Response, Express } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const mongoUri = process.env.MONGO_URI || '';
const portBack = process.env.PORT_BACK || '';

const app: Express = express();

app.use(express.json());


// Endpoint de prueba
app.get('/', (req: Request, res: Response) => {
    res.send('Response from node api :)');
});

// Endpoint para recibir datos de conciertos
app.post('/api/concerts', (req: Request, res: Response) => {
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
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });