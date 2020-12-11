const { Router } = require('express');
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller');
const router = Router();
const bodyParser = require('body-parser');
// ---------------------------------
const jsonParser = bodyParser.json();
// ---------------------------------

// puede ser cualquier metodo, como post, put, delete, y obvio get
// ruta que devuelve todos los usuarios de la DB

router.route('/')
    .get(getNotes)

router.route('/new_note')
    .post(jsonParser, createNote)

router.route('/:id')
    .get(getNote)
    .put(jsonParser, updateNote)
    .delete(jsonParser, deleteNote);


module.exports = router;