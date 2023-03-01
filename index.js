

class ProductManager {
    constructor (){
        this.products = []
    }
    static id = 0 

    getProducts(){
        console.log(this.products);
        return this.products
        
    }
    addProduct(title, description, price, thumbnail, code, stock){
        this.products.push(title, description, price, thumbnail, code, stock, ProductManager.id++)       
    }
    getProductById(){
        if (this.products.filter(item => item.id <= 3)) {
            console.log(...this.products)
        } else {
            console.log("Not found")
        }
    }

}
const product = new ProductManager()
product.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5);
product.addProduct('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', "2b", 7 );
product.addProduct('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', "3c", 2);

product.getProducts();

product.getProductById()


