class Camera {

    constructor(id, name, price, description, imageUrl) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    

    render() {


        return `


        <article class="camera1">


            <img src="${this.imageUrl}" alt="${this.name}">


                <div src="desciption">
            
                    
                    <strong>${this.name}</strong>
                    <p>${this.description}</p>
                    <span>${this.price / 100} €</span>
                    

                    <button class="boutton">

                        <a href="produit.html?id=${this.id}"</a>
                    
                        Ajouter au Panier

                    </button>

                </div>


        </article>

      

        `;


    }

    




    static all(id, callback) {

        fetch("http://localhost:3000/api/cameras/" + id, {

            headers: {

                Accept: "application/json"

            }

        })


        .then(response => response.json())
        .then(data => new Camera(

            data._id,
            data.name,
            data.price,
            data.description,
            data.imageUrl,
            


        ))

        .then(callback)




    }




}


