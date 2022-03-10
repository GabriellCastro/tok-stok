/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// eslint-disable-next-line import/no-unresolved
import { providerController } from './controllers/providerController';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/providers', providerController);

const PORT = process.env.PORT || 3001;

app.listen(PORT);
