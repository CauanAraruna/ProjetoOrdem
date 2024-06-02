var database = require("../database/config")

function pegarElementos() {
    var instrucaoSql = `
    SELECT elemento FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    .then(function (resultados) {
        var elementos = resultados.map(function (resultado) {
            return resultado.elemento;
        });
        return elementos;
    });
}


function puxarRanking() {
    var instrucaoSql = `
    select u.nome, q.pontucao from quiz as q join usuario as u on q.fkUsuario = u.id order by pontucao desc;
`
console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function puxarPonto(id) {
    var instrucaoSql = `
    select max(pontucao) as max_pontuacao from quiz where fkUsuario = ${id};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarElementos,
    puxarRanking,
    puxarPonto
};