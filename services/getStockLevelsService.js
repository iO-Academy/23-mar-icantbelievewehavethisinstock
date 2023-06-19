const getStockLevelsRepository = require('../repositories/getStockLevelsRepository');
const SKUToID = require("../functions/sku-to-id");

const getStockLevels = async (SKU) => {
    console.log('Service: getStockLevels');

    if(!validateSKU.validateSKU(SKU)) {
        const message = "Invalid SKU";
        throw new Error(message);
    }

    const id = SKUToID.SKUToId(SKU)

    try {
        return await getStockLevelsRepository.getStockLevels(id)
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
}

module.exports.getStockLevels = getStockLevels;
