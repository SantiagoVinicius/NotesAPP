var cod = 0
function novaAnotacao(){
    cod++
    let texto = document.getElementById("anotacao").value
    let linhaNova = `<div><div class="card-content white-text"><p id="editfocus-${cod}" contentEditable="true">${texto}</p></div><div class="card-action center"> <button style="margin-left:10px;" class="waves-effect waves-light btn" onclick="focusInput(${cod})">Editar</button> <button onclick="SalvarEdicao()" class="waves-effect waves-light btn">Salvar</button> <button style="margin-left:10px;" class="waves-effect waves-light btn" onclick="excluirUmaLinha (this)">Deletar</button></div></div>`
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

function focusInput(codigo){
    document.getElementById("editfocus-"+codigo).focus();
}


function SalvarEdicao(){
    salvar()
    alert("anotação salva \ncom sucesso")
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




    
    