const functions = require('./../functions.js');
const modelPalpacao = require('./../model/palpacao.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertPalpacao = function (req, res) {
    functions.service(query.palpacaoDAO.insert, req, res, [req.body.nome], "", modelPalpacao, false);
}

const updatePalpacao = function (req, res) {
    functions.service(query.palpacaoDAO.update, req, res, [req.body.nome, req.body.id], "", modelPalpacao, false);
}

const selectAllPalpacao = function (req, res) {
    functions.service(query.palpacaoDAO.selectAll, req, res, "", "default", modelPalpacao, false);
}

module.exports = {
    insertPalpacao,
    updatePalpacao,
    selectAllPalpacao
};