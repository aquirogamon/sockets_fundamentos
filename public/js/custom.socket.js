let socket = io();

//SOCKET.ON escuchar informacion
socket.on('connect', function() {
    console.log('Connectado al Servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor');
});

//SOCKET.EMIT emitir informacion
socket.emit('enviarMensaje', {
    usuario: 'Armando',
    mensaje: 'Hola mundo!!!'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});