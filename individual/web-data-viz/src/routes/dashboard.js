var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/pegarElementos", function (req, res) {
    dashboardController.pegarElementos(req, res);
});

router.get("/puxarRanking", function (req, res) {
    dashboardController.puxarRanking(req, res);
});

router.post("/puxarPonto", function (req, res) {
    dashboardController.puxarPonto(req, res);
})

module.exports = router;