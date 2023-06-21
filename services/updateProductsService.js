const updateProductsRepository = require('../repositories/updateProductsRepository');
const SKUToID = require('../functions/sku-to-id')
const validateSKU = require('../functions/validate-sku')

const updateProducts = async (SKU, updatedDetails) => {
    if(!validateSKU.validateSKU(SKU)) {
        const message = "Invalid SKU.";
        throw new Error(message);
    }
    const id = SKUToID.SKUToId(SKU);

    try {
        return await updateProductsRepository.updateProducts(id, updatedDetails);
    } catch {
        const message = "Unexpected error.";
        throw new Error(message);
    }
}

module.exports.updateProducts = updateProducts;
