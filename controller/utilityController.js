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

const insertDoenca = function (req, res) {
    var atributos = req.body.atributos;
    var values = req.body.values;

    var q = "INSERT INTO doenca (";
    for (var element of atributos)
        q += element + ",";
    q = q.substring(0, q.length - 1);
    q += ") VALUES (";
    for (element of values)
        if (element.type == "string")
            q += "\'" + element.value + "\',";
        else
            q += element.value + ",";
    q = q.substring(0, q.length - 1);
    q += ")";

    functions.service(q, req, res, [], "", "", false);
}

const insertRelacionamentos = function (req, res) {
    var data = req.body.data;
    var queries = [];
    if (data != undefined) {
        for (var element of data) {
            var tabela = element.tabela[0].toUpperCase() + element.tabela.substring(1, element.tabela.length);
            for (var elemento of element.id){
                queries.push("INSERT INTO doenca" + tabela + "(idDoenca, id" + tabela + ") VALUES (" + element.idDoenca + "," + elemento + ")");
            }
        }
        functions.service("", req, res, queries, "", "", true);
    } else
        res.json({
            success: true
        });
}

module.exports = {
    showTables,
    descTable,
    insertAll,
    selectByAtributoByTable,
    insertDoenca,
    insertRelacionamentos
};