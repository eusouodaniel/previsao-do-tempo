const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const server = express();
server.use(bodyParser.json());

server.get('/busca-previsao', async function (req, res) {
    const previsao = await buscaPrevisao(req.query.cidade);

    return res.json({'status': 200, 'responseData': previsao.data})
});


async function buscaPrevisao(cidade) {
    const previsao = await axios.get(`${process.env.URL_BASE}?q=${cidade}&appid=${process.env.API_KEY}`).then(function (response) {
        return response;
    })

    return previsao;
}

const PORT = process.env.PORT || 3000;

server.listen(PORT)