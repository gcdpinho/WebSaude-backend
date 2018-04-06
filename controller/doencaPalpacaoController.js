const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaPalpacao = function (req, res) {
    functions.service(query.doencaPalpacaoDAO.insert, req, res, [req.body.idPalpacao, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaPalpacao
};