const TodoModel = require('./todo.model')

const findAll = async() =>{
    return await TodoModel.find({});
}

const findByID = async(id) =>{
    return await TodoModel.findById(id);
}

const createTodo = async(documento) =>{
    return await TodoModel.create(documento);
}
const updateOne = async(id, documento) =>{
    return TodoModel.findByIdAndUpdate(id, documento );
}

module.exports= {findAll, findByID, createTodo, updateOne};

// para las rutas se inicia en Servicios.