function novaAnotacao(){
    let texto = document.getElementById("anotacao").value
    let linhaNova = `<div class="card-content white-text"><textarea>${texto}</textarea></div><div class="card-action center"><button onclick="btEditar(this)">Editar</button><button onclick="excluirUmaLinha (this)">Deletar</button></div>`
    document.getElementById("anotacoesSalvas").innerHTML += linhaNova
}


function limpar(){
    document.getElementById("anotacao").value = ""
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

//function excluirUmaLinha(botao)
    //botao.parentNode.parentNode.remove()
   // salvar()

function btEditar(){
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




    
    