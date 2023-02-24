products = []
class ProductManager {
    constructor (title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    set addProduct(id){
        if (this.code === id) {
            products.push[this.addProduct]
            console.log(products);
        }
    }

}

let product1 = new ProductManager('Escoba', 'Semi nueva', 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', 1, 5);
let product2 = new ProductManager('Mopa', 'Nueva', 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', 2, 7 );
let product3 = new ProductManager('Secador de piso', 'Un solo uso', 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', 3, 2);


// el metodo set nos va a agregar un valor a una variable o propiedad

// el metodo get nos va a devolver el valor de esta propiedad