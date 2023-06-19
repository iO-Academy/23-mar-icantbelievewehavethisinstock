const updateStockLevelsRepository = require('../repositories/updateStockLevelsRepository');
const SKUToID = require('../functions/sku-to-id');
const getStockLevelsService = require('../services/getStockLevelsService');

const updateStockLevels = async (SKU) => {

    console.log('Service: updateStockLevels');
    if(!SKU.startsWith("ICBWHTIS") || SKU.length > 12) {
        const message = "Invalid SKU";
        throw new Error(message);
    }

    const id = SKUToID.SKUToId(SKU)

    try {
        const stockLevels = await getStockLevelsService.getStockLevels(id);
        console.log(typeof(stockLevels));
        // return await getStockLevelsService.getStockLevels(id)
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
}

module.exports.updateStockLevels = updateStockLevels;
