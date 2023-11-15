// let tipoTexto = "2"
// let tipoNumber = 2 
// let tipoBoolean = "true"
// let tipoBooleann= true 


 /*let meuNome = 'Dúbia Anniely'
console.log(meuNome)

meuNome =  'Anniely Oliveira'
console.log(meuNome)
 

let entradadoUsuario = prompt()
console.log(entradadoUsuario)
*/

let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

let anoNascimento = 0
anoNascimento = 2023 - idade 

let imc = 0
imc = peso / (altura * altura)

console.log("Olá " + nome +  ", você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg, e seu imc é: " + imc + "kg/m")
