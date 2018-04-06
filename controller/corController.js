const functions = require('./../functions.js');
const modelCor = require('./../model/cor.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertCor = function (req, res) {
    functions.service(query.corDAO.insert, req, res, [req.body.nome], "", modelCor, false);
}

const updateCor = function (req, res) {
    functions.service(query.corDAO.update, req, res, [req.body.nome, req.body.id], "", modelCor, false);
}

const selectAllCor = function (req, res) {
    functions.service(query.corDAO.selectAll, req, res, "", "default", modelCor, false);
}

module.exports = {
    insertCor,
    updateCor,
    selectAllCor
};