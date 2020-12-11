const { Router } = require('express');
const { getUsers, createUser, updateUser, getUser, deleteUser } = require('../controllers/users.controller');
const router = Router();

// ---------------------------
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
    // ---------------------------


router.route('/')
    // aqui debemos utilizar getUsers, para obtener todos los usuarios que tenemos
    .get(getUsers)

router.route('/new_user')
    // aqui usaremos el metodo createUser para crear un nuevo usuario
    .post(jsonParser, createUser)


router.route('/:id')
    // aqui usaremos el metodo getUser porque con ese id solo obtendremos un usuario
    .get(getUser)
    // aqui usaremos el metodo updateUser para actualizar un solo usuario, encontrando ese usuario que queremos actualizar por medio del ID
    .put(jsonParser, updateUser)
    // aqui usaremos el metodo de deleteUser para borrar a un solo usuario
    .delete(jsonParser, deleteUser)
module.exports = router;