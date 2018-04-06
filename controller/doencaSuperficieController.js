const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaSuperficie = function (req, res) {
    functions.service(query.doencaSuperficieDAO.insert, req, res, [req.body.idSuperficie, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaSuperficie
};