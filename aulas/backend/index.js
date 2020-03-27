const express = require('express');

const app = express();

app.post('/', (request, response) => {
        return response.json({
            evento: 'Semana Omnistack 11.0',
            aluno: 'Augusto Cesar'
        })
    });

app.listen(3333);