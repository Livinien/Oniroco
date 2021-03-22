Camera.allCamera(cameras => {

    document.querySelector("#photo").innerHTML = cameras.map(camera => camera.render());


});
    
    
    
    
    
