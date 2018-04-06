/* CONSTRUCTOR */
var localizacao = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
localizacao.prototype.getId = function () {
    return this.id;
}
localizacao.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
localizacao.prototype.setId = function (id) {
    this.id = id;
}
localizacao.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = localizacao;