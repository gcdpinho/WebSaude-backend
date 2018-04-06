const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaCor = function (req, res) {
    functions.service(query.doencaCorDAO.insert, req, res, [req.body.idCor, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaCor
};