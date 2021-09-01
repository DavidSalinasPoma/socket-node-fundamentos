const express = require('express');
const cors = require('cors');

class Server {
  // Metodo constructor de la clase
  constructor() {
    this.app = express();
    // Puerto del servidor
    this.port = process.env.PORT;

    // Configuración de web socket
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);

    // Path para las rutas
    this.path = {};

    // Middlewares
    this.middlewares();

    // Rutas de la app
    this.routes();
  }

  // Metodo middleware
  middlewares() {
    // Cors.- Permite protejer el servidor de una manera superficial
    this.app.use(cors());

    // directorio publico
    this.app.use(express.static('src/public'));
  }

  // Metodo de rutas
  routes() {
    // Ruta para login
    // this.app.use(this.path.auth, require('../routes/auth.routes'));
  }

  // Metodo que escucha el puerto
  listesPort() {
    this.server.listen(this.port, () => {
      console.log(`Corriendo en  http://localhost:${this.port}`);
    });
  }
}

module.exports = {
  Server,
};
