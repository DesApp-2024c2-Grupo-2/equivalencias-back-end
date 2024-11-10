/* eslint-disable no-console */
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import routes from './routes';
import config from './config/config';

const bodyParser = require('body-parser');

const FRONT_URL = 'https://equivalencias-front-end-2c2024.onrender.com';

const app = express();

/**
 * Get port from environment and store in Express.
 */

//agrego esto para commitear

app.set('port', config.port || '3001');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: FRONT_URL,
    methods: ['GET', 'POST'], // Métodos permitidos
    credentials: true, // Habilita las credenciales si es necesario
  })
);
app.use(compression());

app.use('/', routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
