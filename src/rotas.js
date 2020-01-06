const express = require('express');
const TradeController = require('./controller/TradeController')
const rotas = express.Router();

rotas.get('/trades', TradeController.lista);
rotas.get('/trades/:id', TradeController.buscaPorId)
rotas.post('/trades', TradeController.adiciona);
rotas.put('/trades/:id', TradeController.atualiza);
rotas.delete('/trades/:id', TradeController.deleta);

module.exports = rotas;