/* CONSTRUCTOR */
var cor = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
cor.prototype.getId = function () {
    return this.id;
}
cor.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
cor.prototype.setId = function (id) {
    this.id = id;
}
cor.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = cor;