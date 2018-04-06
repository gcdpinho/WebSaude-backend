const lesaoFundamental = require('./../controller/lesaoFundamentalController.js');

module.exports = function (router) {

    router.post('/lesaoFundamental/insert', (req, res) => {
        lesaoFundamental.insertLesaoFundamental(req, res);
    });

    router.post('/lesaoFundamental/update', (req, res) => {
        lesaoFundamental.updateLesaoFundamental(req, res);
    });

    router.post('/lesaoFundamental/selectAll', (req, res) => {
        lesaoFundamental.selectAllLesaoFundamental(req, res);
    });

}