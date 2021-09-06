// JavaScript DOM
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

// En este archivo se tendra todas las comunicaciones desde aqui con el servidor
const socketCliente = io();

// Este linstener ayuda a saber cuando se conecta al servidor
socketCliente.on('connect', () => {
  console.log('Conectado');
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

// Este linstener ayuda a saber cuando se desconecta de el servidor
socketCliente.on('disconnect', () => {
  console.log('Desconectado del servidor');
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
});

// Evento del boton
btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value;
  // console.log(mensaje);

  const payload = {
    mensaje,
    id: '123ABC',
    fecha: new Date().getTime(),
  };

  // Mandar la info al servidor
  socketCliente.emit('enviar-mensaje', payload, (id) => {
    console.log('Desde el server', id);
  });
});

// Escuchar el evento desde el servidor
socketCliente.on('enviar-mensaje', (payload) => {
  console.log(payload);
});
