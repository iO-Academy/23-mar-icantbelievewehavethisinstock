const getStockLevelsByIdRepository = require('../repositories/getStockLevelsByIdRepository');
const SKUToID = require("../functions/sku-to-id");
const validateSKU = require("../functions/validate-sku");

const getStockLevelsById = async (SKU) => {
    if(!validateSKU.validateSKU(SKU)) {
        const message = "Invalid SKU";
        throw new Error(message);
    }

    const id = SKUToID.SKUToId(SKU);

    try {
        return await getStockLevelsByIdRepository.getStockLevelsById(id);
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
}

module.exports.getStockLevelsById = getStockLevelsById;
