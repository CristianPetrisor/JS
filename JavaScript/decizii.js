// Decizii: if, ternary si switch

// variabile
let persoanaUnu = "Cristi";
let persoanaDoi = "Cristian";


// if statement
if (persoanaUnu === persoanaDoi) {
    console.log("persoanaUnu este la fel cu persoanaDoi");
} else {
    console.log("persoanaUnu este diferita de persoanaDoi");
}

// ternary operator
// conditie ? resultat : resultat
persoanaUnu === persoanaDoi ? 
    console.log("persoanaUnu este la fel cu persoanaDoi") : 
    console.log("persoanaUnu este diferita de persoanaDoi");  

// switch
let comparatie = "Cristi";

switch (comparatie) {
    case persoanaUnu:
        console.log("comparatie este la fel cu persoanaUnu");
        break;
    case persoanaDoi:
        console.log("comparatie este la fel cu persoanaDoi");
        break;
    case 'Mark':
        console.log("comparatie este la fel cu Mark");
        break;
    default:
        console.log("Nici o comparatie nu s-a satisfacut.");
}


