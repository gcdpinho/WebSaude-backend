const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/*Controller*/
const showTables = function (req, res) {
    functions.service(query.utilityDAO.showTables, req, res, [], "", "", false);
}

const descTable = function (req, res) {
    var q = "DESC " + req.body.table
    functions.service(q, req, res, [], "", "", false);
}

const selectByAtributoByTable = function (req, res) {
    var q = "SELECT id, " + req.body.atributo + " FROM " + req.body.table
    functions.service(q, req, res, [], "", "", false);
}

const insertAll = function (req, res) {
    var data = req.body.data;
    var q = "";
    for (var element of data) {
        q = "INSERT INTO " + element.tabela;
        var keys = Object.keys(element.atributos);
        var attr = "(";
        for (var k of keys)
            attr += k + ","
        attr = attr.substring(0, attr.length - 1);
        attr += ")";
        q += " " + attr;
        var values = "(";
        for (var i = 0; i < keys.length; i++)
            values += "\'" + element.atributos[keys[i]] + "\',";
        values = values.substring(0, values.length - 1);
        values += ")";
        q += " VALUES " + values;
        functions.service(q, req, res, [], "", "", false);
    }
}

module.exports = {
    showTables,
    descTable,
    insertAll,
    selectByAtributoByTable
};