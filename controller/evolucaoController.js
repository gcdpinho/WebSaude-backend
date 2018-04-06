const functions = require('./../functions.js');
const modelEvolucao = require('./../model/evolucao.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertEvolucao = function (req, res) {
    functions.service(query.evolucaoDAO.insert, req, res, [req.body.nome], "", modelEvolucao, false);
}

const updateEvolucao = function (req, res) {
    functions.service(query.evolucaoDAO.update, req, res, [req.body.nome, req.body.id], "", modelEvolucao, false);
}

const selectAllEvolucao = function (req, res) {
    functions.service(query.evolucaoDAO.selectAll, req, res, "", "default", modelEvolucao, false);
}

module.exports = {
    insertEvolucao,
    updateEvolucao,
    selectAllEvolucao
};