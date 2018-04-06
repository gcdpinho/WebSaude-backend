const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaTrauma = function (req, res) {
    functions.service(query.doencaTraumaDAO.insert, req, res, [req.body.idTrauma, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaTrauma
};