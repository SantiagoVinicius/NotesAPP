function novaAnotacao(){
    let texto = document.getElementById("anotacao")
    let linhaNova = `<div class="card-content white-text"><textarea></textarea></div><div class="card-action center"><a id="botaoEditar">Editar</a><a id="botaoDeletar">Deletar</a></div>`
    document.getElementById("anotacoesSalvas").innerHTML += linhaNova
}

let btSalvar = document.getElementById("botaoSalvar")
btSalvar.addEventListener("click", function(){
    novaAnotacao()
    salvar()
})

function salvar(){
localStorage.anotacoesSalvas = document.getElementById("anotacoesSalvas").innerHTML
}