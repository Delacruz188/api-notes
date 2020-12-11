const noteModel = require('../models/Note');
const notesController = {};

// metodo para obtener todas las notas de la base de datos
notesController.getNotes = async(req, res) => {
    const notes = await noteModel.find();
    res.json(notes)
}

// metodo para crear una nueva nota desde /new_note
// recuerda que cualquier consulta a una base de datos, es asincrona, en este caso sera una para crear una nueva nota
notesController.createNote = async(req, res) => {

    const { title, content, date, author } = req.body;
    const newNote = new noteModel({
        title: title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    // console.log(newNote);
    res.json({
        message: "Done"
    })
}


// ------------   Con ID   ---------------
// metodo para obtener una nota
notesController.getNote = async(req, res) => {

    const reqID = req.params.id;
    const note = await noteModel.findById(reqID);
    const { title, content, date, author } = note;
    res.json({
        title: title,
        content: content,
        date: date,
        author: author
    })
}

// metodo para actualizar una nota
notesController.updateNote = async(req, res) => {
    // recuperamos el id
    const reqID = req.params.id;
    // recuperamos los atributos del body
    const { title, content, date, author } = req.body;
    // ahora metemos esos atributos al metodo de actualizar para vaya, actualizar los datos
    await noteModel.findOneAndUpdate(reqID, {
        title: title,
        content: content,
        date: date,
        author: author
    })
    res.json({
        message: 'Nota actualizada'
    })
}

// metodo para elimminar una nota
notesController.deleteNote = async(req, res) => {

    const reqID = req.params.id;

    await noteModel.findByIdAndDelete(reqID);

    res.json({
        message: 'Nota eliminada'
    })
}



module.exports = notesController;