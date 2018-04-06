const functions = require('./../functions.js');
const modelCrescimento = require('./../model/crescimento.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertCrescimento = function (req, res) {
    functions.service(query.crescimentoDAO.insert, req, res, [req.body.nome], "", modelCrescimento, false);
}

const updateCrescimento = function (req, res) {
    functions.service(query.crescimentoDAO.update, req, res, [req.body.nome, req.body.id], "", modelCrescimento, false);
}

const selectAllCrescimento = function (req, res) {
    functions.service(query.crescimentoDAO.selectAll, req, res, "", "default", modelCrescimento, false);
}

module.exports = {
    insertCrescimento,
    updateCrescimento,
    selectAllCrescimento
};