
class ProductManager {
    constructor (title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    get getProducts(){
        return products = [];
    }
    addProduct(id){
        if (this.code === 1) {
            products.push(product1)
        } else if (this.code === 2) {
            products.push(product2)
        } else {
            products.push(product3)
        }
        
    }
    set getProductById(id){
        if (this.code === id) {
            console.log('El producto fue agregado');
        } else {
            console.error('Not Found');
        }
    }
   

}

let product1 = new ProductManager('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', 1, 5);
let product2 = new ProductManager('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', 2, 7 );
let product3 = new ProductManager('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', 3, 2);
console.log(products)
product2.addProduct();
// el metodo set nos va a agregar un valor a una variable o propiedad

// el metodo get nos va a devolver el valor de esta propiedad