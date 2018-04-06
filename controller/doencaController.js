const functions = require('./../functions.js');
const modelDoenca = require('./../model/doenca.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoenca = function (req, res) {
    functions.service(query.doencaDAO.insert, req, res, [req.body.nome, req.body.tipo, req.body.insercao, req.body.dor, req.body.comeco, req.body.flgRemovida, req.body.flgFumo, req.body.flgAlcool], "", modelDoenca, false);
}

const updateDoenca = function (req, res) {
    functions.service(query.doencaDAO.update, req, res, [req.body.nome, req.body.tipo, req.body.insercao, req.body.dor, req.body.comeco, req.body.flgRemovida, req.body.flgFumo, req.body.flgAlcool, req.body.id], "", modelDoenca, false);
}

const selectAllDoenca = function (req, res) {
    functions.service(query.doencaDAO.selectAll, req, res, "", "default", modelDoenca, false);
}

module.exports = {
    insertDoenca,
    updateDoenca,
    selectAllDoenca
};