const doencaCor = require('./../controller/doencaCorController.js');

module.exports = function (router) {

    router.post('/doencaCor/insert', (req, res) => {
        doencaCor.insertDoencaCor(req, res);
    });

}