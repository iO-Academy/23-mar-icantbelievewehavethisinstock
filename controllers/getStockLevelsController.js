const getStockLevelsService = require('../services/getStockLevelsService');

const getStockLevels = (request, response) => {
    console.log('Controller: getStockLevels');
    const SKU = request.params.SKU;

    getStockLevelsService.getStockLevels(SKU)
        .then((result) => {
            const json = {"product": result};
            response.send(json);
        })
        .catch((error) => {
            let status = 500;
            const message = {"message": error.message, "data": []};

            if (error.message.startsWith("Invalid")) {
                status = 400;
            }
            response.status(status).send(message);
        })
}

module.exports.getStocksLevels = getStockLevels;
