

class ProductManager {
    constructor (title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.products = []
    }
    static id = 0 

    getProducts(){
        console.log(this.products);
        return this.products
        
    }
    addProduct(){
        this.products.push(this.title, this.description, this.price, this.thumbnail, this.code, this.stock)
        ProductManager.id++       
    }
    getProductById(id){
        if (this.products.includes(id)) {
            console.log(...this.products)
        } else {
            console.log("Not found")
        }
    }

}

let product1 = new ProductManager('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5);
let product2 = new ProductManager('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', "2b", 7 );
let product3 = new ProductManager('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', "3c", 2);

product1.addProduct()
product2.addProduct()

product1.getProductById("1a")
product1.getProducts()


