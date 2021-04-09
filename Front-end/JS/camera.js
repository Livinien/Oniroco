

// CE QUI PERMET DE RECUPERER LE PARAMETRE ID DANS L'URL //

const urlCamera = new URLSearchParams(window.location.search);
const idCamera = urlCamera.get("id");



// RECUPERER L'ID DU PRODUIT UNIQUE SELECTIONNER //

function getCamera(data, idCamera) {

    let myCamera = data.find(data => data["id"] == idCamera);


}



// CREATION DU FETCH POUR RECUPERER L'ID DE LA CAMERA UNIQUE //


fetch('http://localhost:3000/api/cameras/' + idCamera)
.then(res => res.json())
.then(myCamera => {


    // CONSTRUCTION DU HTML EN JAVASCRIPT //

    
    let section = document.querySelector('.camera');


    let camera = document.createElement('div');
    camera.setAttribute("class", 'picture');
    section.appendChild(camera);

    


    let image = document.createElement('img');
    image.setAttribute("class", 'image2');
    image.src = myCamera.imageUrl;
    camera.appendChild(image);

    let nom = document.createElement('p');
    nom.setAttribute("class", 'name2');
    nom.textContent = myCamera.name;
    camera.appendChild(nom);

    let prix = document.createElement('p');
    prix.setAttribute("class", 'price2');
    prix.textContent = myCamera.price / 100 + ' €';
    camera.appendChild(prix);

    let description = document.createElement('p');
    description.setAttribute("class", 'description');
    description.textContent = myCamera.description;
    camera.appendChild(description);
    

    let lentille = document.createElement('select');
    lentille.setAttribute("id", 'liste');
    camera.appendChild(lentille);
    let myLenses = myCamera.lenses;



    // BOUCLE "FOR" POUR CREER LA LISTE DEROULANTE DES LENTILLES //

   
    for(let i = 0; i < myLenses.length; i++) {


        let el = document.createElement("option");
        el.textContent = myLenses[i];
        liste.appendChild(el);

    }

    


    // CREATION DU BOUTTON "AJOUT AU PANIER" //


    let boutton = document.createElement('button');
    boutton.setAttribute("class", 'btn-produit2');
    boutton.textContent = `Ajouter au Panier`;
    camera.appendChild(boutton);




    // REDIRECTION VERS LA PAGE PANIER //


    boutton.addEventListener('click', (e) => {
        
        
        const produit = {

            id: myCamera._id,
            name: myCamera.name,
            price: myCamera.price / 100,
            image: myCamera.imageUrl,
        

        };



        // INTRODUIRE UNE CONDITION //

        // AJOUTE MOI LES PRODUITS AU PANIER //


        let products = JSON.parse(localStorage.getItem("panier"))
        
        if(products) {

            products.push(produit)
            localStorage.setItem("panier", JSON.stringify(products))

        }


        // SINON AVEC "ELSE" ET BIEN TU ME CREE UN TABLEAU POUR METTRE LE PRODUIT DEDANS // 

        else {

            let produitList = []
            produitList.push(produit)
            localStorage.setItem("panier", JSON.stringify(produitList))
        }



        e.preventDefault()



        // POPUP POUR AFFICHER QUE LE PRODUIT A BIEN ETE AJOUTE AU PANIER //

        
        alert("Votre produit a été ajoutée au panier");


        // REDIRECTION VERS LA PAGE PANIER //

        window.location.href = 'panier.html';
         
    

    });



  
    console.log(myCamera);


})

.catch(error => alert("Erreur : " + error));










    
