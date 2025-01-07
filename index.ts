import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PING_LISTEN_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur l\'API !');
});

app.get('/ping', (req: Request, res: Response) => {
  res.json({
    headers: req.headers,
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).send('404 Error, Route not found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
