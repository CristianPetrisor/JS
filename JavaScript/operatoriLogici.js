// Operatori de Comparatie

// > mai mare
// < mai mic
// >= mai mare sau egal
// <= mai mic sau egal
// == egal cu (numai ca nu verifica si tipul de data)
// === egal cu (verifica si tipul de data)
// ! operator NOT
// != nu este egal cu (dar nu verifica si tipul de data)
// !== nu este gal cu (dar verifica si tipul de data)

// Operatori logici, dar care se folosesc
// la expresii..
// && SI
// || SAU

let x, y;

x = 5;
y = 20;

// comparam valorile intre ele: x si y
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y);    // false
console.log(x <= y);    // true
console.log(!(x === y));   // false -> true
console.log(!(x !== y));   // true -> false

let altX, altY;

altX = 6;
altY = '7';

console.log(typeof altX);
console.log(typeof altY);

console.log(altX === altY); // true
console.log(altX !== altY); // false 

console.log((x > y) && (altX < altY)); // false
console.log((x > y) || (altX > altY)); // false


