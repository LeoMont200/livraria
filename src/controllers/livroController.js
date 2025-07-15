var livroModel = require("../models/livroModel");


function cadastrarLivro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var fkAutor = req.body.autorServer;
    var precoCompra = req.body.precoCompraServer;
    var precoVenda = req.body.PrecoVendaServer;
    var qtd = req.body.qtdServer;
    var fkGenero = req.body.generoServer;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (fkAutor == undefined) {
        res.status(400).send("Seu fkAutor está undefined!");
    } else if (precoCompra == undefined) {
        res.status(400).send("Sua precoCompra está undefined!");
    } else if (precoVenda == undefined) {
        res.status(400).send("Sua precoVenda está undefined!");
    } else if (qtd == undefined) {
        res.status(400).send("Sua quantidade está undefined!");
    } else if (fkGenero == undefined) {
        res.status(400).send("Sua fkGenero está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro(titulo, fkAutor, precoCompra, precoVenda, qtd, fkGenero)
            .then(
                function (resultado) {
                    res.json(resultado);
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
}

module.exports = {
    cadastrarLivro
}