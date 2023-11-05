var heroiNickname = "Foxfac3";
var heroiXP = 5438;

var nivelHeroi;

if (heroiXP <= 1.000) {
    nivelHeroi = "Ferro"; 

 } else if (heroiXP >= 1001 && heroiXP<= 2000) {
            nivelHeroi = "Bronze" }

        else if (heroiXP >= 2001 && heroiXP<= 6000) {
            nivelHeroi = "Prata" }

        else if (heroiXP >= 6001 && heroiXP<= 7000) {
            nivelHeroi = "Ouro" }
        else if (heroiXP >= 7001 && heroiXP<= 8000) {
             nivelHeroi = "Platina" }
        
        else if (heroiXP >= 8001 && heroiXP<= 9000) {
            nivelHeroi = "Ascendente" }

        else if (heroiXP >= 9001 && heroiXP<= 10000) {
            nivelHeroi = "Imortal" }

        else if (heroiXP >=10001) {
            nivelHeroi = "Radiante" }

console.log ("O Herói de nome " + heroiNickname + " está no nível "+  nivelHeroi);