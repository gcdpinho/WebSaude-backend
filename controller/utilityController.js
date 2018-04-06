const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const showTables = function (req, res) {
    functions.service(query.utilityDAO.showTables, req, res, [], "", "", false);
}

const descTable = function (req, res) {
    functions.service(query.utilityDAO.descTable, req, res, [req.body.table], "", "", false);
}

module.exports = {
    showTables,
    descTable
};