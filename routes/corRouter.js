const cor = require('./../controller/corController.js');

module.exports = function (router) {

    router.post('/cor/insert', (req, res) => {
        cor.insertCor(req, res);
    });

    router.post('/cor/update', (req, res) => {
        cor.updateCor(req, res);
    });

    router.post('/cor/selectAll', (req, res) => {
        cor.selectAllCor(req, res);
    });

}
