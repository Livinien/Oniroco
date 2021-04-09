

// CREATION DU FETCH POUR RECUPERER LES DONNEES DE CAMERAS //



fetch('http://localhost:3000/api/cameras/') 
    .then(res => res.json())
    .then(data => {

        

        // CREATION D'UNE BOUCLE POUR STRUCTURER L'HTML // 


        
        for(let i = 0; i < data.length; i++) {
        
            let main = document.querySelector('#main');


            let camera = document.createElement('div');
            camera.setAttribute("class", 'photo');
            main.appendChild(camera);

            

            let image = document.createElement('img');
            image.setAttribute("class", 'image');
            image.src = data[i].imageUrl;
            camera.appendChild(image);

            let nom = document.createElement('p');
            nom.setAttribute("class", 'nom');
            nom.textContent = data[i].name;
            camera.appendChild(nom);

            let prix = document.createElement('p');
            prix.setAttribute("class", 'prix');
            prix.textContent = data[i].price / 100 + ' €';
            camera.appendChild(prix);
            
            let produit = document.createElement('button');
            produit.setAttribute("class", 'btn-produit');
            produit.textContent = `Voir le Produit`;
            camera.appendChild(produit);


            // ECOUTE DE L'EVENEMENT AU CLIC //

            produit.addEventListener('click', (e) => {
                e.preventDefault()
                window.location = 'camera.html?id=' + data[i]._id;

            });


        
        }

        console.log(data);

})


// LE CATCH PERMET D'EVITER LE BUG DE L'APPLICATION EN CAS D'ERREUR //


.catch(error => alert("Erreur : " + error));








