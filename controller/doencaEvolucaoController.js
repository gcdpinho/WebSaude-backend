const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaEvolucao = function (req, res) {
    functions.service(query.doencaEvolucaoDAO.insert, req, res, [req.body.idEvolucao, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaEvolucao
};