const doencaDAO = {
    insert: "INSERT INTO doenca (nome, tipo, insercao, dor, comeco, flgRemovida, flgFumo, flgAlcool) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    selectAll: "SELECT * FROM doenca",
    update: "UPDATE doenca SET nome = ?, tipo = ?, insercao = ?, dor = ?, comeco = ?, flgRemovida = ?, flgFumo = ?, flgAlcool = ? WHERE id = ?"
}

const corDAO = {
    insert: "INSERT INTO cor (nome) VALUES (?)",
    selectAll: "SELECT * FROM cor",
    update: "UPDATE cor SET nome = ? WHERE id = ?"
}

const doencaCorDAO = {
    insert: "INSERT INTO doencaCor (idCor, idDoenca) VALUES (?, ?)",
}

const lesaoFundamentalDAO = {
    insert: "INSERT INTO cor (nome) VALUES (?)",
    selectAll: "SELECT * FROM lesaoFundamental",
    update: "UPDATE lesaoFundamental SET nome = ? WHERE id = ?"
}

const doencaLesaoFundamentalDAO = {
    insert: "INSERT INTO doencaLesaoFundamental (idLesaoFundamental, idDoenca) VALUES (?, ?)",
}

const superficieDAO = {
    insert: "INSERT INTO superficie (nome) VALUES (?)",
    selectAll: "SELECT * FROM superficie",
    update: "UPDATE superficie SET nome = ? WHERE id = ?"
}

const doencaSuperficieDAO = {
    insert: "INSERT INTO doencaSuperficie (idSuperficie, idDoenca) VALUES (?, ?)",
}

const palpacaoDAO = {
    insert: "INSERT INTO palpacao (nome) VALUES (?)",
    selectAll: "SELECT * FROM palpacao",
    update: "UPDATE palpacao SET nome = ? WHERE id = ?"
}

const doencaPalpacaoDAO = {
    insert: "INSERT INTO doencaPalpacao (idPalpacao, idDoenca) VALUES (?, ?)",
}

const evolucaoDAO = {
    insert: "INSERT INTO evolucao (nome) VALUES (?)",
    selectAll: "SELECT * FROM evolucao",
    update: "UPDATE evolucao SET nome = ? WHERE id = ?"
}

const doencaEvolucaoDAO = {
    insert: "INSERT INTO doencaEvolucao (idEvolucao, idDoenca) VALUES (?, ?)",
}

const crescimentoDAO = {
    insert: "INSERT INTO crescimento (nome) VALUES (?)",
    selectAll: "SELECT * FROM crescimento",
    update: "UPDATE crescimento SET nome = ? WHERE id = ?"
}

const doencaCrescimentoDAO = {
    insert: "INSERT INTO doencaCrescimento (idCrescimento, idDoenca) VALUES (?, ?)",
}

const localizacaoDAO = {
    insert: "INSERT INTO localizacao (nome) VALUES (?)",
    selectAll: "SELECT * FROM localizacao",
    update: "UPDATE localizacao SET nome = ? WHERE id = ?"
}


const doencaLocalizacaoDAO = {
    insert: "INSERT INTO doencaLocalizacao (idLocalizacao, idDoenca) VALUES (?, ?)",
}

const traumaDAO = {
    insert: "INSERT INTO trauma (nome) VALUES (?)",
    selectAll: "SELECT * FROM trauma",
    update: "UPDATE trauma SET nome = ? WHERE id = ?"
}

const doencaTraumaDAO = {
    insert: "INSERT INTO doencaTrauma (idTrauma, idDoenca) VALUES (?, ?)",
}

const utilityDAO = {
    showTables: "SHOW TABLES",
    descTable: "DESC ?"
}

module.exports = {
    doencaDAO,
    corDAO,
    doencaCorDAO,
    lesaoFundamentalDAO,
    doencaLesaoFundamentalDAO,
    superficieDAO,
    doencaSuperficieDAO,
    palpacaoDAO,
    doencaPalpacaoDAO,
    evolucaoDAO,
    doencaEvolucaoDAO,
    crescimentoDAO,
    doencaCrescimentoDAO,
    localizacaoDAO,
    doencaLocalizacaoDAO,
    traumaDAO,
    doencaTraumaDAO
}