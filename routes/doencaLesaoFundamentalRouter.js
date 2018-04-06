const doencaLesaoFundamental = require('./../controller/doencaLesaoFundamentalController.js');

module.exports = function (router) {

    router.post('/doencaLesaoFundamental/insert', (req, res) => {
        doencaLesaoFundamental.insertDoencaLesaoFundamental(req, res);
    });

}