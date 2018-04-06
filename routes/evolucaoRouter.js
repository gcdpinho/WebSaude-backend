const evolucao = require('./../controller/evolucaoController.js');

module.exports = function (router) {

    router.post('/evolucao/insert', (req, res) => {
        evolucao.insertEvolucao(req, res);
    });

    router.post('/evolucao/update', (req, res) => {
        evolucao.updateEvolucao(req, res);
    });

    router.post('/evolucao/selectAll', (req, res) => {
        evolucao.selectAllEvolucao(req, res);
    });

}