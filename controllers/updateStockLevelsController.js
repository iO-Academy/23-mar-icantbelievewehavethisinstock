const updateStockLevelsService = require('../services/updateStockLevelsService')

const updateStockLevels = (request, response) => {
    console.log('Controller: updateStockLevels');
    const SKU = request.params.SKU;
    const updatedStockLevels = request.query
    updateStockLevelsService.updateStockLevels(SKU, updatedStockLevels).then((result) => res.send(result));
}

module.exports.updateStockLevels = updateStockLevels;
