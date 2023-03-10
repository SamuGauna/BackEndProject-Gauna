

 class ProductManager {
    constructor (){
        this.array = []
        this.dirFile =  "./files"
        this.namefile = this.dirFile + "/products.json"
        this.fs = require("fs")
    }
    static id = 0 


    
    getProducts = async()=>{
        try {
            await this.fs.promises.mkdir(this.dirFile,{recursive: true})
            // si existe el archivo que cree un array nuevo 
            if (!this.fs.existsSync(this.namefile)) {
                await this.fs.promises.writeFile(this.namefile, "[]")
            }
            // leer el archivo
            let arrproducts = await this.fs.promises.readFile(this.namefile, "utf-8")
            console.log(arrproducts)
            //json string
            
            let products = JSON.parse(arrproducts)
            console.log(this.array);
        } catch(error) {
            console.error(`error en el getproducts ${error}`)
        }
        
    }
    addProduct = async(title, description, price, thumbnail, code, stock)=>{
        try {

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
                const readDocAddProduct = await this.fs.promises.readFile(this.namefile, "utf-8")
                const newProductParse = JSON.parse(readDocAddProduct)
                newProductParse.push(newProduct)
                await this.fs.promises.writeFile(this.namefile, JSON.stringify(newProductParse, null, 2))
    
            } else {
                console.error(`Al producto le faltan datos`)
            }
        } catch(error) {
            console.log(`Hubo un error en AddProduct ${error}`);
        }
       
            
    }
    getProductById = async(id)=>{
        try {
            const searchId = await this.fs.promises.readFile(this.namefile, "utf-8")
            const searchIdParse = JSON.parse(searchId)
            const productFind = searchIdParse.forEach((prod)=> {
                if(prod.id == id) {
                    console.log(`El producto que buscas es ${productFind}`);
                }
            })

            // if (JSON.parse(busquedaId).id === id) {
            //     this.array.filter(busquedaId.obj)
            //     }
             // if ('id' in busquedaId && typeof(obj.id) == id) {
            //     return this.array.filter(busquedaId.obj)
            //     }
        } catch (error) {
            console.log(`Not found getProductById + ${error}`)
        }
        

    }
    updateProduct = async(id, updateItem)=>{
        try{
        const lecturaUpdate =  await this.fs.promises.readFile(this.namefile, "utf-8")
        const updateProductParse = JSON.parse(lecturaUpdate)
        const updateProd = updateProductParse.forEach((element) => {
            if(element.id == id){
                element.title = updateItem
            }
        })
        await this.fs.promises.writeFile(this.namefile, JSON.stringify(updateProd, null, 2))
        } catch(error) {
            console.log(`Error en el updateProducts + ${error}`)
        }
        // no se si usar appendFile o writeFile
    }
    deleteProduct = async(id)=>{
        try{
            const readDeleteProducts = await this.fs.promises.readFile(this.namefile, "utf-8")
            const deleteProductsParse = JSON.parse(readDeleteProducts)
            const deleteProd = deleteProductsParse.filter((element) => element.id == id )
            await this.fs.promises.unlink(this.namefile, deleteProd)

        } catch(error) {
            console.log(`Error en el deleteProduct + ${error}`)
        }
    }

}
//('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5);
//('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', "2b",  );
// ('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', "3c", 2);

// module.exports = {ProductManager}

const producto = new ProductManager()
producto.getProducts()
producto.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5)

