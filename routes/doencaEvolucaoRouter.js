const doencaEvolucao = require('./../controller/doencaEvolucaoController.js');

module.exports = function (router) {

    router.post('/doencaEvolucao/insert', (req, res) => {
        doencaEvolucao.insertDoencaEvolucao(req, res);
    });

}