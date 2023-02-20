import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Appliacation is running at port 3000'));
