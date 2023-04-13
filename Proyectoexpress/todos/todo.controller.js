const {findAll, findByID, createTodo, updateOne} = require('./todo.service');

const callAllTodos = async (req, res) => {
    console.log('Estos son tus Registros PAPU!!!');
    try {
        const todos = await findAll();
        console.log(todos);
        res.status(200).json(todos);
    } catch (e) {
        console.log(e);
        res.status(404).json(e);
    }
}

const callTodoById = async (req, res) => {
    console.log('Estos son por ID PAPU!!!');
    const {id} = req.params;
    try {
        const One = await findByID(id);
        console.log(One);
        res.status(200).json(One);
    } catch (e) {
        console.log(e);
        res.status(404).json(e);
    }
}

const callTodoCreate = async (req, res) => {
    console.log('Creando Documentos PAPU!!!');
    const documento = req.body;
    console.log(req);
    try {
        const newtodo = await createTodo(documento);
        console.log(documento);
        console.log(newtodo);
        res.status(200).json(newtodo);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}

const callOneUpdate = async (req, res) => {
    console.log('Actualizando documentos PAPU!!!');
    const documento = req.body;
    try {
        const {id} = req.params;
        const newtodo = await updateOne(id, documento);
        console.log(newtodo);
        res.status(200).json(newtodo);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}

module.exports = { callAllTodos, callTodoById, callTodoCreate, callOneUpdate};