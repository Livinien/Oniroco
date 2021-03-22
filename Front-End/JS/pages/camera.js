
const urlParams = new URLSearchParams(window.location.search);



Camera.all(urlParams.get('id'), camera => {

    document.querySelector("#produit").innerHTML = camera.render();


});
    

    
    
    
   