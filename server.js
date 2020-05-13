const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const server = express();
server.use(bodyParser.json());

server.post('/busca-previsao', async function (req, res) {
    const previsao = await buscaPrevisao(req.body.cidade);

    return res.json({'status': 200, 'responseData': previsao.data})
});

async function buscaPrevisao(cidade) {
    const previsao = await axios.get(`${process.env.URL_BASE}?q=${cidade}&appid=${process.env.API_KEY}`).then(function (response) {
        return response;
    })

    return previsao;
}

server.post('/busca-cep', async function (req, res) {
    const endereco = await buscaCep(req.body.cep);

    return res.json({'status': 200, 'responseData': endereco.data})
});

async function buscaCep(cep) {
    const endereco = await axios.get(`${process.env.URL_BASE_VIA_CEP}/${cep}/json`).then(function (response) {
        return response;
    })

    return endereco;
}

const PORT = process.env.PORT || 3000;

server.listen(PORT)