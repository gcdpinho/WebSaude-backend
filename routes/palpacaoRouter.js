const palpacao = require('./../controller/palpacaoController.js');

module.exports = function (router) {

    router.post('/palpacao/insert', (req, res) => {
        palpacao.insertPalpacao(req, res);
    });

    router.post('/palpacao/update', (req, res) => {
        palpacao.updatePalpacao(req, res);
    });

    router.post('/palpacao/selectAll', (req, res) => {
        palpacao.selectAllPalpacao(req, res);
    });

}