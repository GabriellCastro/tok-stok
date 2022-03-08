import express from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();

app.use(bodyParser.json());

app.use('/providers');

const PORT = process.env.PORT || 3000;

app.listen(PORT);
