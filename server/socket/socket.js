const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenidos al Grupo'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar Mensaje
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN! :)'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MALL!!! :('
        //     });
        // }
    });
});