const express = require('express')
const router = express.Router();
const{callAllTodos, callTodoById, callTodoCreate, callOneUpdate} = require ('./todo.controller')



router.get('/',callAllTodos);

router.get('/:id',callTodoById);

router.post('/', callTodoCreate)

router.put('/:id', callOneUpdate)

module.exports = router;