import ProductUC from "../../use-cases/product";
import ProductRepository from "../../infrastructure/repositories/product"

const getProducts = async function (httpRequest) {
    const { filter } = httpRequest.query;
    const productRepository = new ProductRepository();
    const useCase = new ProductUC({ productRepository });
    
    const products = await useCase.getProducts(filter);
    if(products.productsFound && products.productsFound.length > 0){
        return {
            statusCode: 200,
            body: products,
        };
    }else{
        return{
            statusCode: 404,
            body: {message:'NOT_FOUND'}
        }
    }
    
};

module.exports = {
    getProducts
}