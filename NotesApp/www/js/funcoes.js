function novaAnotacao(){
    let texto = document.getElementById("anotacao").value
    let linhaNova = `<div class="card-content white-text"><textarea>${texto}</textarea></div><div class="card-action center"><a id="botaoEditar">Editar</a><button onclick="excluirUmaLinha (this)">Deletar</button></div>`
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

function excluirUmaLinha(botao){
    botao.parentNode.parentNode.remove()
    salvar()

}

function carregar(){
    if(localStorage.anotacoesSalvas){
        document.getElementById("anotacoesSalvas").innerHTML = 
        localStorage.anotacoesSalvas
    }
}


window.addEventListener("load", function(){
    carregar()
})




    
    