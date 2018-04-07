const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const showTables = function (req, res) {
    functions.service(query.utilityDAO.showTables, req, res, [], "", "", false);
}

const descTable = function (req, res) {
    var q = "DESC "+req.body.table
    functions.service(q, req, res, [], "", "", false);
}

module.exports = {
    showTables,
    descTable
};