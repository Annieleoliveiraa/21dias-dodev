
let temFome = prompt("Está com fome?")
let temDinheiro = prompt("Tem dinheiro?")
let restAberto = prompt("O restaurante está aberto?")

if(temFome === "não" || temDinheiro === "não") {
  console.log("Hoje a janta será em casa")
}else if(temDinheiro === "sim" && restAberto === "sim") {
   console.log("Hoje o jantar será no seu restaurante preferido!")
} else {
   console.log("Peça um delivery!")
}