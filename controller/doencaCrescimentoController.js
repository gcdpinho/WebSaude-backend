const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaCrescimento = function (req, res) {
    functions.service(query.doencaCrescimentoDAO.insert, req, res, [req.body.idCrescimento, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaCrescimento
};