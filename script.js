let xp = 5000
let nomeHeroi = "Cavaleiro"

if (xp < 1000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é FERRO`);
} else if (xp >= 1000 && xp < 2000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Bronze`);
} else if (xp >= 2000 && xp < 5000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Prata`);
} else if (xp >= 5000 && xp < 8000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Ouro`);
} else if (xp >= 8000 && xp < 9000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Platina`);
} else if (xp >= 9000 && xp < 10000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Ascendente`);
} else if (xp >= 10000 && xp < 10500) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Imortal`);
} else if (xp == 11000) {
    console.log(`O heroi de nome ${nomeHeroi} tem ${xp} e ele é Radiante`);
} else {
    console.log("Favor escolher um número de 1000 à 11000!");
}