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

    // alt mesaj
    console.log("Salutare dragi prieteni inca odata..");
}

// o apelamconsole
mesajDeSalutare();
mesajDeSalutare(); // apelare din nou
mesajDeSalutare(); // apelare inca odata

ani = 23;
let locatie = "California"
function printeaza (nume, ani, locatie)
nume = "Petrisor";
console.log(`${nume}, ${ani}, ${locatie}`);
}
printeaza (nume, ani, locatie );
printeaza (`La Fmailia, ${nume}!`, ani, locatie);
function mesajDeSalutare(){
    console.log("Salutare drag prieten")

}
