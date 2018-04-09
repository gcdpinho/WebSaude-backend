CREATE TABLE doenca(
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,
    tipo varchar(45),
    flgDor BOOLEAN,
    flgRemovida BOOLEAN,
    flgFumo BOOLEAN,
    flgAlcool BOOLEAN

    PRIMARY KEY (id)
);

CREATE TABLE insercao (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaInsercao (
    idInsercao INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idInsercao, idDoenca),
    FOREIGN KEY (idInsercao) REFERENCES insercao (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE comeco (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaComeco (
    idComeco INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idComeco, idDoenca),
    FOREIGN KEY (idComeco) REFERENCES comeco (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE trauma (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaTrauma (
    idTrauma INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idTrauma, idDoenca),
    FOREIGN KEY (idTrauma) REFERENCES trauma (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);


CREATE TABLE cor (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaCor (
    idCor INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idCor, idDoenca),
    FOREIGN KEY (idCor) REFERENCES cor (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE lesaoFundamental (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaLesaoFundamental (
    idLesaoFundamental INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idLesaoFundamental, idDoenca),
    FOREIGN KEY (idLesaoFundamental) REFERENCES lesaoFundamental (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE superficie (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaSuperficie (
    idSuperficie INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idSuperficie, idDoenca),
    FOREIGN KEY (idSuperficie) REFERENCES superficie (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE palpacao (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaPalpacao (
    idPalpacao INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idPalpacao, idDoenca),
    FOREIGN KEY (idPalpacao) REFERENCES palpacao (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE evolucao (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaEvolucao (
    idEvolucao INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idEvolucao, idDoenca),
    FOREIGN KEY (idEvolucao) REFERENCES evolucao (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE crescimento (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);

CREATE TABLE doencaCrescimento (
    idCrescimento INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idCrescimento, idDoenca),
    FOREIGN KEY (idCrescimento) REFERENCES crescimento (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);

CREATE TABLE localizacao (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL UNIQUE,

    PRIMARY KEY (id)
);


CREATE TABLE doencaLocalizacao (
    idLocalizacao INT NOT NULL,
    idDoenca INT NOT NULL,

    PRIMARY KEY (idLocalizacao, idDoenca),
    FOREIGN KEY (idLocalizacao) REFERENCES localizacao (id),
    FOREIGN KEY (idDoenca) REFERENCES doenca (id)
);