const usersController = {}
    // importamos el modelo
const userModel = require('../models/User');


// para obtener todos los usuarios de la DB
usersController.getUsers = async(req, res) => {
    // vamos a recuperar todos los usuarios de la DB, como nos va a devolver un arreglo, lo guardamos en una constante
    const allUsers = await userModel.find();
    res.json(allUsers)
}

// para crear un nuevo usuario
usersController.createUser = async(req, res) => {

    // primero vamos a recuperar los datos enviados por el cliente para guardarlos en un nuevo usuario basado en el userModel
    const { username } = req.body;
    const newUser = new userModel({
        username: username
    })

    await newUser.save();

    res.json({
        message: 'Usuario creado'
    });
}

usersController.getUser = async(req, res) => {

    // recuperamos el id de la peticion
    const userID = req.params.id;

    // lo buscamos en la DB
    const userRecovered = await userModel.findById(userID);

    // ahora le aplicacmos destructuring para sacarle el username nada mas y eso mandamos
    const { username } = userRecovered;

    res.json({
        username: username
    })
}

usersController.updateUser = async(req, res) => {

    // recuperamos el id
    const userID = req.params.id;

    // hacemos destructuring para determinar los datos que vamos a actualizar y meter los nuevos
    const { username } = req.body;

    // ahora buscamos en la base de datos el usuario por medio del id y actualizamos sus campos
    await userModel.findOneAndUpdate(
        userID, {
            username: username
        }
    )


    res.json({
        message: 'Usuario actualizado'
    })
}

usersController.deleteUser = async(req, res) => {

    // recuperamos el id
    const userID = req.params.id;

    // lo buscamos en la DB y al mismo tiempo lo borramos con la linea de findByIdAndDelete()
    await userModel.findOneAndDelete(userID);

    res.json({
        message: 'User deleted'
    })
}







module.exports = usersController;