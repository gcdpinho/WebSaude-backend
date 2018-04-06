const trauma = require('./../controller/traumaController.js');

module.exports = function (router) {

    router.post('/trauma/insert', (req, res) => {
        trauma.insertTrauma(req, res);
    });

    router.post('/trauma/update', (req, res) => {
        trauma.updateTrauma(req, res);
    });

    router.post('/trauma/selectAll', (req, res) => {
        trauma.selectAllTrauma(req, res);
    });

}