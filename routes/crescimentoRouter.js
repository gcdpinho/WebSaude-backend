const crescimento = require('./../controller/crescimentoController.js');

module.exports = function (router) {

    router.post('/crescimento/insert', (req, res) => {
        crescimento.insertCrescimento(req, res);
    });

    router.post('/crescimento/update', (req, res) => {
        crescimento.updateCrescimento(req, res);
    });

    router.post('/crescimento/selectAll', (req, res) => {
        crescimento.selectAllCrescimento(req, res);
    });

}