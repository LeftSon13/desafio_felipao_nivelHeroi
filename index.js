//Desafio lógica de programação Felipão DIO
// Classificador Nível de Herói

const heroi = "Felipão";    // Nome do herói
let xp = 5000;          // XP do herói (pode ser alterado para testar diferentes níveis)
let nivel = 0;      // Nível do herói (inicializado como 0)

if (xp < 1000) {
    nivel = "Ferro";        // Nível para XP menor que 1000
}
else if (xp > 1001, xp < 2000) {
    nivel = "Bronze";       // Nível para XP entre 1001 e 2000
}
else if (xp > 2001, xp < 3000) {
    nivel = "Prata";        // Nível para XP entre 2001 e 3000
}
else if (xp > 3001, xp < 4000) {
    nivel = "Ouro";     // Nível para XP entre 3001 e 4000
}
else if (xp > 4001, xp < 5000) {
    nivel = "Platina";      // Nível para XP entre 4001 e 5000  
}
else if (xp > 5001, xp < 6000) {
    nivel = "Diamante";     // Nível para XP entre 5001 e 6000  
}
else if (xp > 6001, xp < 7000) {
    nivel = "Ascendente";               // Nível para XP entre 6001 e 7000
}
else if (xp > 7001, xp < 8000) {
    nivel = "Imortal";          // Nível para XP entre 7001 e 8000
}
else if (xp > 8001) {
    nivel = "Radiante";     // Nível para XP maior que 8001
}

console.log("Olá, " + heroi + "! Você é um " + nivel + " com " + xp + " de XP.");         // Exibe o resultado no console

