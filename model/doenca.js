/* CONSTRUCTOR */
var doenca = function (data) {
    this.id = data.id;
    this.nome = data.nome;
    this.tipo = data.tipo;
    this.insercao = data.insercao;
    this.dor = data.dor;
    this.comeco = data.comeco;
    this.flgRemovida = data.flgRemovida;
    this.flgFumo = data.flgFumo;
    this.flgAlcool = data.flgAlcool;
}

/* GETTERS */
doenca.prototype.getId = function () {
    return this.id;
}
doenca.prototype.getNome = function () {
    return this.none;
}
doenca.prototype.getTipo = function () {
    return this.tipo;
}
doenca.prototype.getInsercao = function () {
    return this.insercao;
}
doenca.prototype.getDor = function () {
    return this.dor;
}
doenca.prototype.getComeco = function () {
    return this.comeco;
}
doenca.prototype.getFlgRemovida = function () {
    return this.flgRemovida;
}
doenca.prototype.getFlgFumo = function () {
    return this.flgFumo;
}

doenca.prototype.getFlgAlcool = function () {
    return this.flgAlcool;
}

/* SETTERS */
doenca.prototype.setId = function (id) {
    this.id = id;
}
doenca.prototype.setNome = function (nome) {
    this.nome = nome;
}
doenca.prototype.setTipo = function (tipo) {
    this.tipo = tipo;
}
doenca.prototype.setInsercao = function (insercao) {
    this.insercao = insercao;
}
doenca.prototype.setDor = function (dor) {
    this.dor = dor;
}
doenca.prototype.setComeco = function (comeco) {
    this.comeco = comeco;
}
doenca.prototype.setFlgRemovida = function (flgRemovida) {
    this.flgRemovida = flgRemovida;
}
doenca.prototype.setFlgFumo = function (flgFumo) {
    this.flgFumo = flgFumo;
}
doenca.prototype.setFlgAlcool = function (flgAlcool) {
    this.flgAlcool = flgAlcool;
}

module.exports = doenca;