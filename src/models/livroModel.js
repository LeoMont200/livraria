// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarLivro(titulo, fkAutor, precoCompra, precoVenda, qtd, fkGenero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarLivro():", titulo, fkAutor, precoCompra, precoVenda, qtd, fkGenero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (titulo, fkAutor, precoCompra, precoVenda, qtd, fkGenero) VALUES ('${titulo}', '${fkAutor}', '${precoCompra}', '${precoVenda}', '${qtd}', '${fkGenero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivro
};