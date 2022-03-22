// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)
/*

// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupně řada 0 až 10');
//TADY NAPIS CYKLUS


for (let i = 0; i <= 10; i++) {
    console.log(i);
}
*/
console.log('První příklad - použití while');

let i = 0
while (i < 10) {
    i++;
    console.log(i);
}


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
/*
console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

for (let k = 0; k < 10; k++) {
    console.log(k);
}
*/
console.log('Druhý příklad - použití while');

let k = 0
while (k < 10) {
    k++;
    console.log(k);
}



// Třetí příklad - vypiš sestupně čísla od 10 do 0
/*console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS
for (let j = 10; j >= 0; j--) {
    console.log(j);
}
*/
console.log('Třetí příklad - použití while');

let j = 11;
while (j > 0) {

    j--;
    console.log(j);
}
