import {PRODUCTS} from "../schemas/products"
class ProductRepository {
  constructor() {
  }
  async getProducts(query) {
    //AQUI IRIA LA CONSULTA CON LA BASE DE DATOS
    // EJEMPLO: SELECT * FROM PRODUCTS WHERE NAME LIKE '%${query}%'; ESTO OBTIENE LOS PRODUCTOS QUE COINCIDAN CON LA BUSQUEDA
    // BUSCARIAMOS 2 PRODUCTOS CON LA CATEGORIA DEL PRIMER PRODUCTO
    // EJEMPLO: SELECT * FROM PRODUCTS WHERE CATEGORY = 'CATEGORIA CONSULTA ANTERIOR' LIMIT 2;

    //JAVASCRIPT
    //BUSCAMOS PRODUCTOS QUE COINCIDAN CON LA BUSQUEDA
    const productsFound = PRODUCTS.filter(element => element.name.toLowerCase().includes(query.toLowerCase()));
    let productsSuggested = null;
    if(productsFound.length > 0){
        //OBTENEMOS LA CATEGORIA DEL PRIMER PRODUCTO OBTENIDO
        const category = productsFound[0].category;
        //BUSCAMOS LOS PRODUCTOS CON LA CATEGORIA OBTENIDA, PERO QUE SEA DIFERENTE AL PRODUCTO ANTERIOR Y SOLO OBTENEMOS LOS 2 PRIMEROS
        productsSuggested = PRODUCTS.filter((element, index) => element.category.toLowerCase().includes(category.toLowerCase()) 
        && !element.name.toLowerCase().includes(productsFound[0].name.toLowerCase())).slice(0,2);
    }
    return {
        productsFound,
        productsSuggested
    }
  }
}

export default ProductRepository;
