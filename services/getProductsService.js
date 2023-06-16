const getProductsRepository = require('../repositories/getProductsRepository');

const getProducts = async () => {
    console.log('Service: getProducts');
    const response = await getProductsRepository.getProducts();
    return {"products": response}
}

module.exports.getProducts = getProducts;
