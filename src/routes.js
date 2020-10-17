const express = require('express')

const routes = express.Router()

routes.get('/teste', (req, res) => {res.send('<h1>Hello World Teste!</h1>')})

module.exports = routes;