const utility = require('./../controller/utilityController.js');

module.exports = function (router) {

    router.get('/utility/showTables', (req, res) => {
        utility.showTables(req, res);
    });

    router.post('/utility/descTable', (req, res) => {
        utility.descTable(req, res);
    });

}