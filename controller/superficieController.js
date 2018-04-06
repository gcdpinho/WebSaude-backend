const functions = require('./../functions.js');
const modelSuperficie = require('./../model/superficie.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertSuperficie = function (req, res) {
    functions.service(query.superficieDAO.insert, req, res, [req.body.nome], "", modelSuperficie, false);
}

const updateSuperficie = function (req, res) {
    functions.service(query.superficieDAO.update, req, res, [req.body.nome, req.body.id], "", modelSuperficie, false);
}

const selectAllSuperficie = function (req, res) {
    functions.service(query.superficieDAO.selectAll, req, res, "", "default", modelSuperficie, false);
}

module.exports = {
    insertSuperficie,
    updateSuperficie,
    selectAllSuperficie
};