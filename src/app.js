import express, { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRouter from './routes/auth.routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();



app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public'));
});

app.use('/api/auth', authRouter);

export default app;