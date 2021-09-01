// Paquetepara utilizar Variables de entorno
require('dotenv').config();

// Paaqutes porpios
const { Server } = require('./models/server');
const server = new Server();
server.listesPort(); // Lanzar el servidor
