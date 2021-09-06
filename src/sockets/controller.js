// Este es el controlador de toda la comunicación por sockets

const socketController = (socket) => {
  console.log('Cliente Conectado', socket.id);

  // Para saber si el cliente se de ha desconectado
  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id);
  });

  // Escuchar lo que el cliente Emite
  socket.on('enviar-mensaje', (payload, callback) => {
    const id = 12345645;

    // Retorna Respuesta al cliente desde el server
    callback(id);

    // Mandar mensaje  a todos los clientes conectados
    socket.broadcast.emit('enviar-mensaje', payload);
  });
};

module.exports = {
  socketController,
};
