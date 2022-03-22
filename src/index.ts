import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 4000;

import testRouter from './routes/test';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/test', testRouter);

app.get('*', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
