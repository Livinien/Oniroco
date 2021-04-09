let total = localStorage.getItem("total");
let resultat = JSON.parse(total);

let commande = localStorage.getItem("id");
let identite = JSON.parse(commande);
console.log(identite)


let contact = localStorage.getItem("validation");
console.log(contact)



let div = document.createElement('div');
div.id = "div1";
let valide = document.getElementById("validation");
valide.appendChild(div);


let p = document.createElement("p");
div.appendChild(p);
p.textContent = "Votre récapitulatif de votre commande"

let pcontact = document.createElement("p");
div.appendChild(pcontact);
pcontact.textContent = contact;


let paragraphe = document.createElement("p");
div.appendChild(paragraphe);
paragraphe.textContent = "Numéro de votre commande"






let validationCommande = document.createElement("p")
validationCommande.textContent = identite;
let validation = document.getElementById("div1");
validation.appendChild(validationCommande);







let montant = document.createElement("p");
div.appendChild(montant);
montant.textContent = "Montant total de votre commande"




let validationTotal = document.createElement("p")
validationTotal.textContent = resultat + " €";

validation.appendChild(validationTotal);