const updateProductsRepository = require('../repositories/updateProductsRepository');


const updateProducts = async (sku,updatedDetails) => {
    console.log('Service: updateProducts');
    return await updateProductsRepository.updateProducts(sku, updatedDetails);
}

module.exports.updateProducts = updateProducts;