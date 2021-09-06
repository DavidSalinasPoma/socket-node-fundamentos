// Paquetepara utilizar Variables de entorno
require('dotenv').config();

// Paquetes porpios
const { Server } = require('./models');

const server = new Server();
server.listenerPort(); // Lanzar el servidor
