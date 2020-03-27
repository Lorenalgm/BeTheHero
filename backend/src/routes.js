const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    
    return response.json({
        evento: 'Semana Omnistack',
        aluno: 'Lorena'
    });
});

module.exports = routes;
