const doencaDAO = {
    insert: "INSERT INTO doenca (nome, tipo, insercao, dor, comeco, flgRemovida, flgFumo, flgAlcool) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    selectAll: "SELECT * FROM doenca",
    update: "UPDATE doenca SET nome = ?, tipo = ?, insercao = ?, dor = ?, comeco = ?, flgRemovida = ?, flgFumo = ?, flgAlcool = ? WHERE id = ?",
    selectFullDoenca: `SELECT d.id AS idDoenca, d.nome AS nomeDoenca, d.tipo AS tipoDoenca,
    t.id AS idTrauma, t.nome AS trauma,
    s.id AS idSuperficie, s.nome AS superficie,
    r.id AS idRemovida, r.nome AS removida,
    p.id AS idPalpacao, p.nome AS palpacao,
    l.id AS idLocalizacao, l.nome AS localizacao,
    lf.id idLesaoFundamental, lf.nome AS lesaoFundamental, 
    i.id AS idInsercao, i.nome AS insercao,
    f.id AS idFumo, f.nome AS fumo, 
    e.id AS idEvolucao, e.nome AS evolucao, 
    dor.id AS idDor, dor.nome AS dor, 
    cres.id AS idCrescimento, cres.nome AS crescimento,
    cor.id AS idCor, cor.nome AS cor, 
    con.id AS idConduta, con.nome AS conduta,
    com.id AS idComeco, com.nome AS comeco,
    a.id AS idAlcool, a.nome AS alcool
    FROM doenca AS d
    LEFT JOIN doencaTrauma AS dt ON d.id = dt.idDoenca 
    LEFT JOIN trauma AS t ON t.id = dt.idTrauma
    LEFT JOIN doencaSuperficie AS ds ON ds.idDoenca = d.id 
    LEFT JOIN superficie AS s ON s.id = ds.idSuperficie 
    LEFT JOIN doencaRemovida AS dr ON dr.idDoenca = d.id 
    LEFT JOIN removida AS r ON r.id = dr.idRemovida 
    LEFT JOIN doencaPalpacao AS dp ON dp.idDoenca = d.id 
    LEFT JOIN palpacao AS p ON p.id = dp.idPalpacao 
    LEFT JOIN doencaLocalizacao AS dl ON dl.idDoenca = d.id 
    LEFT JOIN localizacao AS l ON l.id = dl.idLocalizacao 
    LEFT JOIN doencaLesaoFundamental AS dlf ON dlf.idDoenca = d.id 
    LEFT JOIN lesaoFundamental AS lf ON lf.id = dlf.idLesaoFundamental 
    LEFT JOIN doencaInsercao AS di ON di.idDoenca = d.id 
    LEFT JOIN insercao AS i ON i.id = di.idInsercao 
    LEFT JOIN doencaFumo AS df ON df.idDoenca = d.id 
    LEFT JOIN fumo AS f ON f.id = df.idFumo 
    LEFT JOIN doencaEvolucao AS de ON de.idDoenca = d.id 
    LEFT JOIN evolucao AS e ON e.id = de.idEvolucao 
    LEFT JOIN doencaDor AS ddor ON ddor.idDoenca = d.id 
    LEFT JOIN dor ON dor.id = ddor.idDor 
    LEFT JOIN doencaCrescimento AS dcres ON dcres.idDoenca = d.id 
    LEFT JOIN crescimento AS cres ON cres.id = dcres.idCrescimento 
    LEFT JOIN doencaCor AS dcor ON dcor.idDoenca = d.id 
    LEFT JOIN cor ON cor.id = dcor.idCor 
    LEFT JOIN doencaConduta AS dcon ON dcon.idDoenca = d.id 
    LEFT JOIN conduta AS con ON con.id = dcon.idConduta 
    LEFT JOIN doencaComeco AS dcom ON dcom.idDoenca = d.id 
    LEFT JOIN comeco AS com ON com.id = dcom.idComeco 
    LEFT JOIN doencaAlcool AS da ON da.idDoenca = d.id 
    LEFT JOIN alcool AS a ON a.id = da.idAlcool 
    ORDER BY idDoenca 
    `
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
    doencaTraumaDAO,
    utilityDAO
}