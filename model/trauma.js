/* CONSTRUCTOR */
var trauma = function (data) {
    this.id = data.id;
    this.nome = data.nome;
}

/* GETTERS */
trauma.prototype.getId = function () {
    return this.id;
}
trauma.prototype.getNome = function () {
    return this.none;
}

/* SETTERS */
trauma.prototype.setId = function (id) {
    this.id = id;
}
trauma.prototype.setNome = function (nome) {
    this.nome = nome;
}

module.exports = trauma;