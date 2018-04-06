/* CONSTRUCTOR */
var lesaoFundamental = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
lesaoFundamental.prototype.getId = function () {
    return this.id;
}
lesaoFundamental.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
lesaoFundamental.prototype.setId = function (id) {
    this.id = id;
}
lesaoFundamental.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = lesaoFundamental;