const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const insertDoencaLesaoFundamental = function (req, res) {
    functions.service(query.doencaLesaoFundamentalDAO.insert, req, res, [req.body.idLesaoFundamental, req.body.idDoenca], "", "", false);
}

module.exports = {
    insertDoencaLesaoFundamental
};