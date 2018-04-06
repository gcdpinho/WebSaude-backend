const doenca = require('./../controller/doencaController.js');

module.exports = function (router) {

    router.post('/doenca/insert', (req, res) => {
        doenca.insertDoenca(req, res);
    });

    router.post('/doenca/update', (req, res) => {
        doenca.updateDoenca(req, res);
    });

    router.post('/doenca/selectAll', (req, res) => {
        doenca.selectAllDoenca(req, res);
    });

}