console.log("Desafio Classificador de nível de Herói - swich/case")

let nome = "Super Herói 2"
let xp = 1.000


switch(xp){
  case (xp<1.000):
    console.log("O Herói de nome " + nome + " está no nível de Ferro");
    break;
  case (xp>1.000) && (xp<=2.000):
    console.log("O Herói de nome " + nome + " está no nível de Bronze");
    break;
  case (xp>2.000) && (xp<=6.000):
    console.log("O Herói de nome " + nome + " está no nível de Prata");
    break;
  case (xp>6.000) && (xp<= 7.000):
    console.log("O Herói de nome " + nome + " está no nível de Ouro");
    break;
  case (xp < 7.000) && (xp<= 8.000):
    console.log("O Herói de nome " + nome + " está no nível de Platina");
    break;
  case (xp > 8.000) && (xp<= 9.000):
    console.log("O Herói de nome " + nome + " está no nível de Ascendente");
    break;
  case (xp>9.000) && (xp<=10.000):
    console.log("O Herói de nome " + nome + " está no nível de Imortal");
    break;
  default:
        console.log("O Herói de nome " + nome + " está no nível de Radiante");
    break;
}


