const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // trim sirve para quitar espacios de un string automaticamente
        trim: true,
        // el campo unique sirve para que el dato o parametro sea unico, recuerda que mongo pone por defecto el id de cualquier documento
        unique: true
    }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);