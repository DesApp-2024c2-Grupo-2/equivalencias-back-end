#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Module dependencies.
 */
/*########################################################*/
/*import debugPkg from 'debug';
import http from 'http';
import app from '../lib/app';
import db from '../lib/models';

const debug = debugPkg('js/www:server');


// Create HTTP server.
 

const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://equivalencias-front-end-2c2024.onrender.com', // Cambia esto al dominio correcto de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    io.emit('message', msg);
  });
});


// Listen on the port set on the app, on all network interfaces.

const port = app.get('port');
if (!port) {
  throw '¡¡Hay que setear el port de la aplicación Express!!';
}

// Run sequelize before listen
db.sequelize.authenticate().then(() => {
  server.listen(port, () => {
    console.log(`¡Aplicación iniciada! ====> 🌎 http://localhost:${port}`);
  });
});

server.on('error', onError);
server.on('listening', onListening);


// Event listener for HTTP server "error" event.


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}


// Event listener for HTTP server "listening" event.


function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}*/

/*############################################*/

import debugPkg from 'debug';
import https from 'https';
import fs from 'fs';
import app from '../lib/app';
import db from '../lib/models';

const debug = debugPkg('js/www:server');

/**
 * Configuración de certificados SSL
 * Asegúrate de tener los archivos de certificado generados como `private.key` y `certificate.crt`
 */
const options = {
  key: fs.readFileSync('path/to/private.key'), // Ruta al archivo de clave privada
  cert: fs.readFileSync('path/to/certificate.crt'), // Ruta al archivo de certificado
  ca: fs.readFileSync('path/to/ca_bundle.crt'), // (Opcional) Ruta al archivo de CA
};

/**
 * Crear el servidor HTTPS.
 */
const server = https.createServer(options, app);

// Configuración de socket.io para WebSocket seguro (wss://)
const io = require('socket.io')(server, {
  cors: {
    origin: 'https://equivalencias-front-end-2c2024.onrender.com', // Dominio correcto de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
});

// Conexión de WebSocket
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    io.emit('message', msg);
  });
});

/**
 * Escuchar el puerto configurado en la app, en todas las interfaces de red.
 */
const port = app.get('port');
if (!port) {
  throw '¡¡Hay que setear el port de la aplicación Express!!';
}

// Ejecutar la autenticación de Sequelize antes de iniciar el servidor
db.sequelize.authenticate().then(() => {
  server.listen(port, () => {
    console.log(`¡Aplicación iniciada! ====> 🌎 https://localhost:${port}`); // Usar https en el log
  });
});

server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener para el evento "error" del servidor HTTP.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // Manejar errores específicos de escucha con mensajes amigables
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener para el evento "listening" del servidor HTTP.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
