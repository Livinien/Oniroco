const urlCamera = new URLSearchParams(window.location.search);
const idCamera = urlCamera.get("id");





function getCamera(data, idCamera) {

    let myCamera = data.find(data => data["id"] == idCamera);


}


fetch('http://localhost:3000/api/cameras/' + idCamera)
.then(res => res.json())
.then(myCamera => {


    
    
    let main = document.querySelector('.camera');


    let camera = document.createElement('div');
    camera.setAttribute("class", 'photo');
    main.appendChild(camera);

    


    let image = document.createElement('img');
    image.setAttribute("class", 'image');
    image.src = myCamera.imageUrl;
    camera.appendChild(image);

    let nom = document.createElement('p');
    nom.setAttribute("class", 'nom');
    nom.textContent = myCamera.name;
    camera.appendChild(nom);

    let prix = document.createElement('p');
    prix.setAttribute("class", 'prix');
    prix.textContent = myCamera.price / 100 + '€';
    camera.appendChild(prix);

    let description = document.createElement('p');
    description.setAttribute("class", 'description');
    description.textContent = myCamera.description;
    camera.appendChild(description);
    
    let produit = document.createElement('button');
    produit.setAttribute("class", 'btn-produit');
    produit.textContent = `Ajouter au Panier`;
    camera.appendChild(produit);

 

    produit.addEventListener('click', (e) => {
        e.preventDefault()
        window.location = 'panier.html';

    });

        
   
  
    console.log(myCamera);


})

.catch(error => alert("Erreur : " + error));










    
