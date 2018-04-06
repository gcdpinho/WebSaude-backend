const doencaLocalizacao = require('./../controller/doencaLocalizacaoController.js');

module.exports = function (router) {

    router.post('/doencaLocalizacao/insert', (req, res) => {
        doencaLocalizacao.insertDoencaLocalizacao(req, res);
    });

}