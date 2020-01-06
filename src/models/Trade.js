const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    entrada: {
        type: Number,
        required: true
    },
    saida: {
        type: Number,
        required: true
    },
    pontos:{
        type: Number,
        required: true
    },
    contratos:{
        type: Number,
        required: true
    },
    saldo:{
        type: Number,
        required: true
    },
    dataCriacao:{
        type: Date,
        defaut: Date.now
    }

});

mongoose.model('Trade', TradeSchema);