const doencaTrauma = require('./../controller/doencaTraumaController.js');

module.exports = function (router) {

    router.post('/doencaTrauma/insert', (req, res) => {
        doencaTrauma.insertDoencaTrauma(req, res);
    });

}