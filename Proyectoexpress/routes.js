const todosRoutes = require('./todos')

function rutas (app) {
    app.use('/todos', todosRoutes)
}

module.exports = rutas;