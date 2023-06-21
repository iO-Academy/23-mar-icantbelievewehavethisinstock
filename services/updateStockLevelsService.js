const updateStockLevelsRepository = require('../repositories/updateStockLevelsRepository');
const SKUToID = require('../functions/sku-to-id');
const validateSKU = require('../functions/validate-sku');
const getStockLevels = require('./getStockLevelsByIdService');

const updateStockLevels = async (SKU, updatedStockLevels) => {
    let message = "Unexpected Error.";

    if (!validateSKU.validateSKU(SKU)) {
        message = "Invalid SKU.";
        throw new Error(message);
    }

    const currentStockLevels = await getStockLevels.getStockLevelsById(SKU);
    const currentStockLevelsNumber = currentStockLevels[0].stock_level;

    const updatedStockLevelNumber = updatedStockLevels.stock_level;

    const newStockAmount = currentStockLevelsNumber + updatedStockLevelNumber;

    const id = SKUToID.SKUToId(SKU);

    if (newStockAmount >= 0) {
        try {
            return await updateStockLevelsRepository.updateStockLevels(id, newStockAmount);
        } catch {
            throw new Error(message);
        }
    } else {
        message = "Not enough stock.";
        throw new Error(message);
    }
}

module.exports.updateStockLevels = updateStockLevels;
