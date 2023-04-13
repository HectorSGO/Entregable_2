const express = require('express');
const connect = require ('./mongo.config.js')
const rutas = require ('./routes');
const { route } = require('./todos/index.js');
//const{callAllTodos} = require ('./todos/todo.controller')
const app = express();

app.use(express.json());
rutas (app);
connect ();


app.listen(3001, '', 1, () => {
    console.log('Ya quedo!!!')
    
})
