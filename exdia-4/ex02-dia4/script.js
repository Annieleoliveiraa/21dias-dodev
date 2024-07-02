
let nome
let idade 
let temCarta = false
let temCarro = false

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
let opcaoCarta = prompt("Possui carta de motorista?")
if(opcaoCarta == "S") {
   temCarta = true 
}

let opcaoCarro = prompt("Você tem carro?")
if(opcaoCarro == "S") {
   temCarro = true 
}
  
if(idade < 18 || temCarta) {
   console.log(nome + ", você não pode dirigir")
} else if(idade >= 18 && temCarta && temCarro) {
   console.log(nome + ", você pode dirigir, mas não tem carro")
} else {
   console.log(nome + ", você será o motorista!")
}


