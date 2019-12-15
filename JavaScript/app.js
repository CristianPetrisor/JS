// aici este nivelul global
let nume;
nume = "Mark";
let ani = 36;
let locatie = "Palo Alto";

function printeaza(nume, ani, locatie) {
    // aici este nivelul local
    //let nume = "Adrian";

    console.log(`${nume}, ${ani}, ${locatie}`);
    //console.log(nume); // aici va printa Adrian
}

// apelam functia proprie
printeaza(nume, ani, locatie); // aici va printa Mark
printeaza(`Bine ai venit, ${nume}!`, ani, locatie);

function mesajDeSalutare() {
    console.log("Salutare dragi utilizatori!");
}

// o apelam
mesajDeSalutare();


