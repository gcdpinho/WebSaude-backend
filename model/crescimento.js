/* CONSTRUCTOR */
var crescimento = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
crescimento.prototype.getId = function () {
    return this.id;
}
crescimento.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
crescimento.prototype.setId = function (id) {
    this.id = id;
}
crescimento.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = crescimento;