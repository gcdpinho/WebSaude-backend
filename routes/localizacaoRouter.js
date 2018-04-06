const localizacao = require('./../controller/localizacaoController.js');

module.exports = function (router) {

    router.post('/localizacao/insert', (req, res) => {
        localizacao.insertLocalizacao(req, res);
    });

    router.post('/localizacao/update', (req, res) => {
        localizacao.updateLocalizacao(req, res);
    });

    router.post('/localizacao/selectAll', (req, res) => {
        localizacao.selectAllLocalizacao(req, res);
    });

}