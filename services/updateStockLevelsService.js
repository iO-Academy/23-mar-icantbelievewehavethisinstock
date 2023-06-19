const updateStockLevelsRepository = require('../repositories/updateStockLevelsRepository');
const SKUToID = require('../functions/sku-to-id');
const validateSKU = require('../functions/validate-sku');
const getStockLevels = require('../services/getStockLevelsService');

const updateStockLevels = async (SKU, updatedStockLevel) => {

    console.log('Service: updatedStockLevels');
    if(!validateSKU.validateSKU(SKU) ) {
        const message = "Invalid SKU";
        throw new Error(message);
    }

    try {
        const currentStockLevels = await getStockLevels.getStockLevels(SKU);
        console.log(currentStockLevels);
      // if(stockLevels.stock_level >== updatedStockLevel.stock_level) {
      // }
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
}

module.exports.updateStockLevels = updateStockLevels;
