const superficie = require('./../controller/superficieController.js');

module.exports = function (router) {

    router.post('/superficie/insert', (req, res) => {
        superficie.insertSuperficie(req, res);
    });

    router.post('/superficie/update', (req, res) => {
        superficie.updateSuperficie(req, res);
    });

    router.post('/superficie/selectAll', (req, res) => {
        superficie.selectAllSuperficie(req, res);
    });

}