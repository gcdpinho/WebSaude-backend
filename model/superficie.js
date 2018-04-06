/* CONSTRUCTOR */
var superficie = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
superficie.prototype.getId = function () {
    return this.id;
}
superficie.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
superficie.prototype.setId = function (id) {
    this.id = id;
}
superficie.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = superficie;