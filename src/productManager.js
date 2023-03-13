

export default class ProductManager {
    constructor (){
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
            // // leer el archivo
            // let arrproducts = await this.fs.promises.readFile(this.namefile, "utf-8")
            // console.log(arrproducts)
            // //json string
            
            // let products = JSON.parse(arrproducts)
            // console.log(products)
        } catch(error) {
            console.error(`error en el getproducts ${error}`)
        }
        
    }
    addProduct = async(title, description, price, thumbnail, code, stock)=>{
        try {
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


// module.exports = ProductManager
