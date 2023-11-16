//let victory = parseInt(prompt("Quantas victórias têm?"))
//let defeat = parseInt(prompt("Quantas derrotas têm?"))
let defeat = 20
let victory = 80
let result = calculateBalanceRankeada(victory, defeat)
let level

function calculateBalanceRankeada(victory, defeat) {
    return (victory - defeat)
};

if (result < 10) {
    level = "Ferro"
} else if (result <= 20) {
    level = "Bronze"
} else if (result <= 50) {
    level = "Prata"
} else if (result <= 80) {
    level = "Ouro"
} else if (result <= 90) {
    level = "Diamante"
} else if (result <= 100) {
    level = "Lendario"
} else {
    level = "Imortal"
}

console.log("O herói tem um saldo de " + result + " vitórias e está no nível " + level)