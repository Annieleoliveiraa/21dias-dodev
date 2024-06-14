// ============ Exercício ================


let nome = prompt("Insira seu nome")
let idade = parseInt(prompt("Insira sua idade"))
let altura = parseFloat(prompt("Insira sua altura"))
let peso = parseInt(prompt("Insira seu peso"))

let anoNascim = 0 
anoNascim = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos,  nasceu em " + anoNascim + ", tem " 
+ altura + " de altura, pesa " + peso + " kg e seu imc é " + imc + "kg/m")