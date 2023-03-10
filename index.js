// const ProductManager = require('./productManager.js');
// let product = new ProductManager()
// console.log(productManager);

// let operationProduct = async ()=> {
//     await product.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5)
//     let consulta = await product.getProductById(0)
//     console.log(consulta);
//     await productManager.getProducts();
    
// }
// operationProduct();

const { ProductManager } = require('./productManager.js')
let product = new ProductManager()

const operationProduct = async()=> {
    await product.getProducts();
    await product.addProduct('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5)
    let consulta = await product.getProductById(1)
    console.log(consulta);
}
operationProduct();