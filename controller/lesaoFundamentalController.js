const functions = require('./../functions.js');
const modelLesaoFundamental = require('./../model/lesaoFundamental.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertLesaoFundamental = function (req, res) {
    functions.service(query.lesaoFundamentalDAO.insert, req, res, [req.body.nome], "", modelLesaoFundamental, false);
}

const updateLesaoFundamental = function (req, res) {
    functions.service(query.lesaoFundamentalDAO.update, req, res, [req.body.nome, req.body.id], "", modelLesaoFundamental, false);
}

const selectAllLesaoFundamental = function (req, res) {
    functions.service(query.lesaoFundamentalDAO.selectAll, req, res, "", "default", modelLesaoFundamental, false);
}

module.exports = {
    insertLesaoFundamental,
    updateLesaoFundamental,
    selectAllLesaoFundamental
};