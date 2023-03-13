


// import { ProductManager } from "./productManager.js";
// import ProductManager from "./productManager.js";
// const product = new ProductManager()

// async function operationProduct() {
//     await product.getProducts();
//     await product.addProduct("Escoba", "Semi nueva", 77, "https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp", "1a", 5);
//     let consulta = await product.getProductById(1);
//     console.log(consulta);
// }
// operationProduct();
//('Escoba', 'Semi nueva', 77, 'https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp', "1a", 5);
//('Mopa', 'Nueva', 88, 'https://http2.mlstatic.com/D_NQ_NP_2X_724551-MLA32041668736_092019-F.webp', "2b",  );
// ('Secador de piso', 'Un solo uso', 99, 'https://http2.mlstatic.com/D_NQ_NP_2X_775191-MLA53364171913_012023-F.webp', "3c", 2);



// const ProductManager = require("./productManager.js")

// const product = new ProductManager()

import ProductManager from "./productManager.js"
const product = new ProductManager()

const functionProduct = async ()=> {
    await product.getProducts()
    await product.addProduct("Escoba", "Semi nueva", 77, "https://http2.mlstatic.com/D_NQ_NP_2X_780827-MLA52027354635_102022-F.webp", "1a", 5)
    let consulta = await product.getProductById(0)
    console.log(consulta);
}

functionProduct();