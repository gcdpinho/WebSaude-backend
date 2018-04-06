const functions = require('./../functions.js');
const modelLocalizacao = require('./../model/localizacao.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertLocalizacao = function (req, res) {
    functions.service(query.localizacaoDAO.insert, req, res, [req.body.nome], "", modelLocalizacao, false);
}

const updateLocalizacao = function (req, res) {
    functions.service(query.localizacaoDAO.update, req, res, [req.body.nome, req.body.id], "", modelLocalizacao, false);
}

const selectAllLocalizacao = function (req, res) {
    functions.service(query.localizacaoDAO.selectAll, req, res, "", "default", modelLocalizacao, false);
}

module.exports = {
    insertLocalizacao,
    updateLocalizacao,
    selectAllLocalizacao
};