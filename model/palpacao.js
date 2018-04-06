/* CONSTRUCTOR */
var palpacao = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
palpacao.prototype.getId = function () {
    return this.id;
}
palpacao.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
palpacao.prototype.setId = function (id) {
    this.id = id;
}
palpacao.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = palpacao;