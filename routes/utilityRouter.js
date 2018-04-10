const utility = require('./../controller/utilityController.js');

module.exports = function (router) {

    router.get('/utility/showTables', (req, res) => {
        utility.showTables(req, res);
    });

    router.post('/utility/descTable', (req, res) => {
        utility.descTable(req, res);
    });

    router.post('/utility/insertAll', (req, res) => {
        utility.insertAll(req, res);
    });

    router.post('/utility/selectByAtributoByTable', (req, res) => {
        utility.selectByAtributoByTable(req, res);
    });

    router.post('/utility/insertDoenca', (req, res) => {
        utility.insertDoenca(req, res);
    });

 
    router.post('/utility/insertRelacionamentos', (req, res) => {
        utility.insertRelacionamentos(req, res);
    });
    
    
}
