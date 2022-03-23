import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import testRouter from './routes/test';

const app = express();

const PORT = process.env.PORT || 4000;

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
