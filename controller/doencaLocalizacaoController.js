const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaLocalizacao = function (req, res) {
    functions.service(query.doencaLocalizacaoDAO.insert, req, res, [req.body.idLocalizacao, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaLocalizacao
};