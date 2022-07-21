function novaAnotacao(){
    let texto = document.getElementById("anotacao").value
    let linhaNova = `<div><div class="card-content white-text"><p contentEditable="true">${texto}</p></div><div class="card-action center"><button onclick="Editar()">Editar</button><button onclick="excluirUmaLinha (this)">Deletar</button></div></div>`
    document.getElementById("anotacoesSalvas").innerHTML += linhaNova
}

let btSalvar = document.getElementById("botaoSalvar")
btSalvar.addEventListener("click", function(){
    novaAnotacao()
    limpar()
    salvar()
})

function salvar(){
    localStorage.anotacoesSalvas = document.getElementById("anotacoesSalvas").innerHTML
    }

function limpar(){
    document.getElementById("anotacao").value = ""
}

function Editar(){
    salvar()
    console.log("Editar")
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




    
    