

// RECUPERATION DU PRIX TOTALE DE LA COMMANDE DEPUIS LE LE LOCALSTORAGE //

let total = localStorage.getItem("total");
let resultat = JSON.parse(total);



// RECUPERATION DE L'ID DE LA COMMANDE DEPUIS LE LOCALSTORAGE //

let identite = localStorage.getItem("order");
console.log(identite)


// CREATION DE LA DIV //

let div = document.createElement('div');
div.id = "div1";
let valide = document.getElementById("validation");
valide.appendChild(div);



// RECUPERATION DES DONNEES DU FORMULAIRE DE CONTACT //

let contact = localStorage.getItem("validation");
let info = JSON.parse(contact);
console.log(info)






// RECAPITULATIF DE LA COMMANDE //


let p = document.createElement("p");
div.appendChild(p);
p.textContent = "Votre récapitulatif de votre commande"



let pcontact = document.createElement("p");
div.appendChild(pcontact);
let infoContact = `${info.firstName} ${info.lastName} <br> ${info.address} <br> ${info.city} <br> ${info.email}`

pcontact.innerHTML = infoContact
pcontact.style.textAlign = "center";










// ID DE LA COMMANDE //


let paragraphe = document.createElement("p");
div.appendChild(paragraphe);
paragraphe.textContent = "Numéro de votre commande"



let validationCommande = document.createElement("p")
validationCommande.textContent = identite;
let validation = document.getElementById("div1");
validation.appendChild(validationCommande);






// LE MONTANT TOTAL //


let montant = document.createElement("p");
div.appendChild(montant);
montant.textContent = "Montant total de votre commande"




let validationTotal = document.createElement("p")
validationTotal.textContent = resultat + " €";
validation.appendChild(validationTotal);