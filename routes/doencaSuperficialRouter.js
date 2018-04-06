const doencaSuperficie = require('./../controller/doencaSuperficieController.js');

module.exports = function (router) {

    router.post('/doencaSuperficie/insert', (req, res) => {
        doencaSuperficie.insertDoencaSuperficie(req, res);
    });

}