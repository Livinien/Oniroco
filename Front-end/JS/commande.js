let monPanier = localStorage.getItem("panier");
let panierTotal = JSON.parse(monPanier);



for(let i = 0; i < panierTotal.length; i++) {

    let monTableau = document.getElementById("table");
    let ligne = monTableau.insertRow(-1);
    tbody.appendChild(ligne);



    let cell = ligne.insertCell(0);
    ligne.appendChild(cell);
    cell.textContent = panierTotal[i].name;

    let cell1 = ligne.insertCell(1);
    ligne.appendChild(cell1);
    let boutton = document.createElement("button");
    boutton.setAttribute("id", panierTotal[i].id);

    cell1.appendChild(boutton);
    boutton.textContent = "Supprimer";

    let cell2 = ligne.insertCell(2);
    ligne.appendChild(cell1);
    cell2.textContent = panierTotal[i].price + " €";

  

    let bouttonSupprimer = document.getElementById(panierTotal[i].id);
    bouttonSupprimer.addEventListener("click", function() {


        if(boutton.id === panierTotal[i].id) { 
            localStorage.getItem("panierTotal")
            localStorage.removeItem(panierTotal[i]); 
        
        
        }





    });


 
 
};



document.getElementById("formulaire").addEventListener("submit", function(e){




let erreur;
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");
let mail = document.getElementById("mail");



    if(!ville.value) {

        erreur = "Entrez votre ville svp";
    }


    if(!mail.value) {

        erreur = "Entrez votre adresse mail svp";
        let regMail = /[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}/;
    }

    if(!adresse.value) {

        erreur = "Entrez votre adresse postale svp";
    }


    if(!nom.value) {

        erreur = "Entrez votre nom de famille svp";
    }


    if(!prenom.value) {

        erreur = "Entrez votre prénom svp";
    }






    if(erreur) {

        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;

        return false;
    }



    else {

        alert('PAYMENT PRÊT À ÊTRE ENVOYÉ');

    }




    let contact = {

        firstName: prenom.value,
        lastName: nom.value,
        address: adresse.value,
        city: ville.value,
        mail: mail.value,
        
    };

    localStorage.setItem("contact", JSON.stringify(contact));


    let products = [];

    for(let i = 0; i < panierTotal.length; i++) {
        products.push(panierTotal[i].id);
        localStorage.setItem("id", JSON.stringify(products));

    };


    const request = {

        contact : contact,
        products : products,
    
    }




console.log(request);




 fetch('http://localhost:3000/api/cameras/order', {

        method: "POST",
        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(request)

    })

   


    .then(response => response.json())
    .then(data => {

        localStorage.setItem("_id", JSON.stringify(data._id));
        window.location.href = 'validation.html';

        
    

    })

    

    .catch(err => console.log(`erreur message : ${err}`))

    
});




