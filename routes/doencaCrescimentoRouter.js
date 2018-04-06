const doencaCrescimento = require('./../controller/doencaCrescimentoController.js');

module.exports = function (router) {

    router.post('/doencaCrescimento/insert', (req, res) => {
        doencaCrescimento.insertDoencaCrescimento(req, res);
    });

}