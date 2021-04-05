let total = localStorage.getItem("total");
let resultat = JSON.parse(total);

let commande = localStorage.getItem("id");
let identite = JSON.parse(commande);
console.log(identite)


let div = document.createElement('div');
div.id = "div1";
let validationCommande = document.createElement("p")
validationCommande.textContent = identite;
let validation = document.getElementById("div1");
validation.appendChild(validationCommande);