const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

/* criando servico de criacao da ong */
routes.post('/ongs', async (request, response) => {
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id })
});

/*listando todas as ongs cadastradas */
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});

module.exports = routes;