// let form = document.getElementById("formulaire");
// form.addEventListener("boutton", function() {
// let nom = document.getElementById("nom");
// let prenom = document.getElementById("prenom");
// let adresse = document.getElementById("adresse");
// let ville = document.getElementById("ville");
// let email = document.getElementById("mail");


// let contact = {

//     firstName: prenom.value,
//     lastName: nom.value,
//     address: adresse.value,
//     city: ville.value,
//     email: email.value,

// };



// let products = [];
//     for(let i in panierFinal) {
//         products.push(panierFinal[i].id);


//     };



//  fetch('http://localhost:3000/api/cameras/order', {

//         method: "POST",
//         headers: {

//             "Content-Type": "application/json"

//         },

//         body: JSON.stringify({ contact, products })

//     })

   

//     .then(response => response.json())
//     .then(data => {

//         sessionStorage.setItem("_id", JSON.stringify(data.formulaire));
//         window.location.href = "validation.html";


//     })

//     .catch(err => console.log(`erreur message : ${err}`))




// });


















// document.getElementById("formulaire").addEventListener("boutton", function() {

//     let contact = {

//         firstname: document.querySelector("#prenom").value,
//         name: document.querySelector("#nom").value,
//         address: document.querySelector("#adresse").value,
//         mail: document.querySelector("#mail").value,
//         city: document.querySelector("#ville").value,
        

//     }

//     console.log(contact);


// });






let panier = localStorage.getItem("panier");
let monPanier = JSON.parse(panier);
let products = [];


for(let i = 0; i < monPanier.length; i++) {

    products.push(monPanier[i].id);

    localStorage.setItem("id", JSON.stringify (products));


};


console.log(monPanier);







fetch('http://localhost:3000/api/cameras/order'), {

    method: "POST",
    headers: {

        "content-type": "application/json"

    },

    body: send

    // Il va falloir mettre les informations de "contact" et "produit" dans le body.

}






requete.addEventListener("load", function() {
alert(requete.responseText);

})

let send = JSON.stringify({contact, products});


requete.body(send) //boddy récupère la variable de "send"

});