
let nomeDoUsuario = ""
let idadeDoUsuario = 0
let alturaUsuario = 0
let pesoUsuario = 0

nomeDoUsuario = prompt("Digite seu nome")
idadeDoUsuario = parseInt(prompt("Digite sua idade"))
alturaUsuario = parseFloat(prompt("Digite sua altura"))
pesoUsuario = parseInt(prompt("Digite seu peso"))

let anoNascimento = 0
anoNascimento = 2023 - idadeDoUsuario 

let imc = 0
imc = pesoUsuario / (alturaUsuario * alturaUsuario)

console.log("Olá " + nomeDoUsuario + ", você tem " + idadeDoUsuario +
    " anos, nasceu em " + anoNascimento +
    ", tem " + alturaUsuario + " de altura, pesa " + pesoUsuario +
     "kg e seu imc é " + imc + " kg")