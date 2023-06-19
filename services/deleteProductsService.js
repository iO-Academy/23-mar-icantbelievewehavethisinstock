const deleteProductsRepository = require('../repositories/deleteProductsRepository');
const SKUToID = require('../functions/sku-to-id')

const deleteProducts = async (SKU) => {
    console.log('Service: deleteProducts');

    if(!SKU.startsWith("ICBWHTIS") || SKU.length > 12) {
        const message = "Invalid SKU";
        throw new Error(message);
    }

    const id = SKUToID.SKUToId(SKU)

    try {
        return await deleteProductsRepository.deleteProducts(id)
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
}

module.exports.deleteProducts = deleteProducts;
