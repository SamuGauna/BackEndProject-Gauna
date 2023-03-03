

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
        if ( title && description && price && thumbnail && code && stock) {
            const Producto = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: ProductManager.id++
            }
            return this.products.push(Producto) 
        } else {
            console.error(`Al producto le faltan datos`)
        }
            
    }
    getProductById(id){
        if (this.products.find(item => item.id == id)) {
            console.log('El producto que buscas si esta en tu inventario')
        } else {
            console.log("Not found")
        }
    }

}
const product = new ProductManager()
product.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5);

product.getProducts();

  

 product.addProduct('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', "2b",  );

 product.addProduct('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', "3c", 2);

 product.getProductById(1)

 product.getProducts();