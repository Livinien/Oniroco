

fetch('http://localhost:3000/api/cameras')
.then(res => res.json())
.then(data => {

    
    
    for(let i = 0; i < data.length; i++) {
    
        let main = document.querySelector('.camera');


        let camera = document.createElement('div');
        camera.setAttribute("class", 'camera');
        main.appendChild(camera);

        
        


        let image = document.createElement('img');
        image.setAttribute("class", 'image');
        image.src = data[0].imageUrl;
        camera.appendChild(image);

        let nom = document.createElement('p');
        nom.setAttribute("class", 'nom');
        nom.textContent = data[0].name;
        camera.appendChild(nom);

        let prix = document.createElement('p');
        prix.setAttribute("class", 'prix');
        prix.textContent = data[0].price / 100 + '€';
        camera.appendChild(prix);

        let description = document.createElement('p');
        description.setAttribute("class", 'prix');
        description.textContent = data[0].description;
        camera.appendChild(description);
        
        let produit = document.createElement('button');
        produit.setAttribute("class", 'btn-produit');
        produit.textContent = `Ajouter au Panier`;
        camera.appendChild(produit);


        produit.addEventListener('click', (e) => {
            e.preventDefault()
            window.location = 'commande.html?id=' + data[0]._id;

        });

        


    
    }

    console.log(data);

})

.catch(error => alert("Recommencer :" + error));