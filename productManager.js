

 class ProductManager {
    constructor (){
        this.array = []
        this.namefile = "/products.json"
        this.fs = require("fs")
    }
    static id = 0 


    
    getProducts = async()=>{
        try {
            // si existe el archivo que cree un array nuevo 
            if (!this.fs.existsSync(this.namefile)) {
                await this.fs.promises.writeFile(this.namefile, this.array)
            }
            // leer el archivo
            let arrproducts = await this.fs.promises.readFile(this.namefile, "utf-8")
            console.log(arrproducts)
            //json string
            
            this.array = JSON.parse(arrproducts)
            console.log(this.array);
        } catch(error) {
            console.error(`error en la lectura del array ${error}`)
        }
        
    }
    addProduct = async(title, description, price, thumbnail, code, stock)=>{
        if ( title && description && price && thumbnail && code && stock) {
            const newProduct = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: ProductManager.id++
            }
            this.array.push(newProduct)
            await this.fs.promises.writeFile(this.namefile, JSON.stringify(this.array))

        } else {
            console.error(`Al producto le faltan datos`)
        }
            
    }
    getProductById(id){
        if (this.array.find(item => item.id == id)) {
            return item

        } else {
            console.log("Not found")
        }
    }
    updateProduct(id, updateItem){
        // se usa el await fs.promises.appendFile('ruta', contenido)
    }
    deleteProduct(id){
        //se usa fs.
    }

}
// const product = new ProductManager()
// product.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5);

// product.getProducts();

// product.addProduct('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', "2b",  );

// product.addProduct('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', "3c", 2);

// product.getProductById(1)

// product.getProducts();

let product = new ProductManager()


let operationProduct = async ()=> {
    await product.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5)
    let consulta = await product.getProductById(0)
    console.log(consulta);
    await productManager.getProducts();
    
}
operationProduct();