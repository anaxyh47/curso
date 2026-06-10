const senha = "123456"
let senhaInformada

senhaInformada = prompt("Informe sua senha")
senhaInformada = parseInt(senhaInformada)
if(senha == senhaInformada ){
    alert("SENHA CORRETA!")
}else{
    alert("SENHA INCORRETA!")
}