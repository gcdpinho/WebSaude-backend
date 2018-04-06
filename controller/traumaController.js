const functions = require('./../functions.js');
const modelTrauma = require('./../model/trauma.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertTrauma = function (req, res) {
    functions.service(query.traumaDAO.insert, req, res, [req.body.nome], "", modelTrauma, false);
}

const updateTrauma = function (req, res) {
    functions.service(query.traumaDAO.update, req, res, [req.body.nome, req.body.id], "", modelTrauma, false);
}

const selectAllTrauma = function (req, res) {
    functions.service(query.traumaDAO.selectAll, req, res, "", "default", modelTrauma, false);
}

module.exports = {
    insertTrauma,
    updateTrauma,
    selectAllTrauma
};