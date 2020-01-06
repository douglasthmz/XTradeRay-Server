const mongoose = require('mongoose');

const Trade = mongoose.model('Trade');

module.exports = {
    async lista(req, res) {
        const trades = await Trade.find();
        return res.json(trades)
    },

    async adiciona(req, res) {
        const trade = await Trade.create(req.body);
        return res.json(trade);
    },

    async buscaPorId(req, res) {
        const trade = await Trade.findById(req.params.id);
        return res.json(trade);
    },

    async atualiza(req, res) {
        const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(trade);
    },

    async deleta(req, res) {
        await Trade.findByIdAndDelete(req.params.id);
        return res.send();
    }
}