
let num1 = parseInt(prompt("Digite um número"))
let num2 = parseInt(prompt("Digite outro número"))
let opcaoEscolha = parseInt(prompt("Escolha a operação em que deseja realizar:"
 + "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

switch(opcaoEscolha) {
case 1: 
   console.log(num1 + "+" + num2 + " = " + (num1 + num2))
   break
case 2: 
   console.log(num1 + "-" + num2 + " = " + (num1 + num2))
   break 
case 3: 
   console.log(num1 + "*" + num2 + " = " + (num1 + num2))   
   break 
default:
   console.log(num1 + "/" + num2 + " = " + (num1 + num2))  
   break
}