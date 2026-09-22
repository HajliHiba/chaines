const prompt = require('prompt-sync')();
let texte = prompt("Entrez une chaîne :");
let z = 0;


for (let a of texte) {
    z++;
}

console.log(`La longueur de "${texte}" est de ${z} caractères.`);
