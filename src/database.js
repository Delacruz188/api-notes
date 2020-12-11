const mongoose = require('mongoose');

const uri = 'mongodb://localhost/mernstack'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
// una vez la conexion sea abierta haremos que nos mande un mensaje para saber que esta conexion fue exitosa
connection.once('open', () => {
    console.log('Connection done beibe');
})