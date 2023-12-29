let nomePersonagem = "Vucton";

let xp = 100;

for (let i = 0; i < 6; i++) {

    

    if (xp >=0 && xp <= 1000) {
        console.log("O Heroi de nome " + nomePersonagem + " está no Nível de Ferro")
    } else if (xp >= 1001 && xp <= 2000) {
        console.log("O Heroi de nome " + nomePersonagem + " está no Nível de Bronze")
    } else if (xp >= 2001 && xp <= 5000) {
        console.log("O Heroi de nome " + nomePersonagem + " está no Nível de Prata Ouro")
    } else if (xp >= 5001 && xp <= 8000) {
        console.log("O Heroi de nome " + nomePersonagem + " está no Nível de Platina Diamante")
    } else if (xp >= 8001 && xp <= 9000 || xp > 9000) {
        console.log("O Heroi de nome " + nomePersonagem + " está no Nível de Ascendente")
    }
    xp += 1900
}