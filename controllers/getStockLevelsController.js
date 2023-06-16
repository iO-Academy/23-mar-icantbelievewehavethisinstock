const getStockLevelsService = require('../services/getStockLevelsService');

const getStockLevels = (request, response) => {
    console.log('Controller: getStockLevels');
    const SKU = request.params.SKU;
    getStockLevelsService.getStockLevels(SKU).then((result) => res.send(result));
}

module.exports.getStocksLevels = getStockLevels;
