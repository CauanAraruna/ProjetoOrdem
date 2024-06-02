var dashboardModel = require("../models/dashboardModel");


function pegarElementos(req, res) {
    dashboardModel.pegarElementos()
        .then(function (elementos) {
            res.json(elementos);
            console.log(elementos);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao recuperar os elementos! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

function puxarRanking(req, res) {
    dashboardModel.puxarRanking()
    .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao recuperar os elementos! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function puxarPonto(req, res) {
    var id = req.body.idServer

    dashboardModel.puxarPonto(id)
    .then(
        function (resultado) {
            res.json(resultado);
            console.log(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    pegarElementos,
    puxarRanking,
    puxarPonto
}