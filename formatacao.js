MnhaPrimeiraFuncao("");

function MnhaPrimeiraFuncao(msg){
    alert("A aplicação será aberta, após o OK "+msg); 
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != ""){
    alert("Obrigado sr(a) ' + nome.value + ' os seus dados foram cadastrados com sucesso')
    }
}