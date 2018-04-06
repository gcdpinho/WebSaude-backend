/* CONSTRUCTOR */
var evolucao = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
evolucao.prototype.getId = function () {
    return this.id;
}
evolucao.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
evolucao.prototype.setId = function (id) {
    this.id = id;
}
evolucao.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = evolucao;