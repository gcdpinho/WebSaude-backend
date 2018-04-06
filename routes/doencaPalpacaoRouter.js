const doencaPalpacao = require('./../controller/doencaPalpacaoController.js');

module.exports = function (router) {

    router.post('/doencaPalpacao/insert', (req, res) => {
        doencaPalpacao.insertDoencaPalpacao(req, res);
    });

}