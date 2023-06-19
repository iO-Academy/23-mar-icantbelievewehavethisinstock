const updateProductsRepository = require('../repositories/updateProductsRepository');
const SKUToID = require('../functions/sku-to-id')

const updateProducts = async (SKU, updatedDetails) => {
    console.log('Service: updateProducts');

    if (!SKU.startsWith("ICBWHTIS") || SKU.length > 12) {
        const message = "Invalid SKU";
        throw new Error(message);
    }

    const id = SKUToID.SKUToId(SKU)

    try {
        return await updateProductsRepository.updateProducts(id, updatedDetails)
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
}

module.exports.updateProducts = updateProducts;
