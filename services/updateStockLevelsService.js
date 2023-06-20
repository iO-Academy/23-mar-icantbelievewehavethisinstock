const updateStockLevelsRepository = require('../repositories/updateStockLevelsRepository');
const SKUToID = require('../functions/sku-to-id');
const validateSKU = require('../functions/validate-sku');
const getStockLevels = require('../services/getStockLevelsService');

const updateStockLevels = async (SKU, updatedStockLevels) => {
    let message = "Unexpected Error";

    if (!validateSKU.validateSKU(SKU)) {
        message = "Invalid SKU";
        throw new Error(message);
    }

    const currentStockLevels = await getStockLevels.getStockLevels(SKU);
    const currentStockLevelsNumber = await currentStockLevels.map(stock_level => stock_level.stock_level);

    const updatedStockLevelNumber = Number(updatedStockLevels.updated_fields.stock_level);
    const newStockAmount = currentStockLevelsNumber[0] + updatedStockLevelNumber;
    const id = SKUToID.SKUToId(SKU);

    if (newStockAmount >= 0) {
        try {
            return await updateStockLevelsRepository.updateStockLevels(id, newStockAmount);
        } catch {
            throw new Error(message);
        }
    } else {
        message = "Not enough stock";
        throw new Error(message);
    }
}

module.exports.updateStockLevels = updateStockLevels;
