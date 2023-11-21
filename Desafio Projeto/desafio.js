let nomeDoHeroi = "Batman"
let quandidadeXP = 4000
let nivel= ""



if (quandidadeXP < 1000){
  nivel = "Ferro"
}else if (quandidadeXP >=1001 &&  quandidadeXP <=2000){
  nivel = "Bronze"
}else if (quandidadeXP >=2001 && quandidadeXP<=5000){
  nivel = "Prata"
}else if (quandidadeXP >=6001 && quandidadeXP <=7000){
  nivel = "Ouro"
}else if (quandidadeXP >=7001 && quandidadeXP<=8000){
    nivel = "Platina"   
}else if (quandidadeXP >=8001 && quandidadeXP<=9000){
  nivel = "Ascendente" 
}else if (quandidadeXP >=9001 && quandidadeXP <=10000){
  nivel = "Imortal" 
}else {
  nivel = "Radiante"
}

console.log("O Heroi de nome " + nomeDoHeroi + " esta no nivel de " + nivel)


