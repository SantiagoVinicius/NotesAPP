function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value
    document.getElementById("anotacoes-salvas").innerHTML += "<textarea>" + 
    novaAnotacao + "</textarea>"
    document.getElementById("anotacao").value = " " 
    alert("anotação salva \ncom sucesso")

}

let btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click", function(){
    incluirUmaLinha()
    limpar()
    salvar()
})

function salvar(){
localStorage.ListarVagas = document.getElementById("ListarVagas").innerHTML


}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    navigator.vibrate(7000);
})