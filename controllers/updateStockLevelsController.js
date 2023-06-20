const updateStockLevelsService = require('../services/updateStockLevelsService')

const updateStockLevels = (request, response) => {
    console.log('Controller: updateStockLevels');
    const SKU = request.params.SKU;
    const updatedStockLevels = request.body;

    updateStockLevelsService.updateStockLevels(SKU, updatedStockLevels)
        .then(() => {
            const message = {"message": "Successfully updated stock levels for product."};
            response.send(message);
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

module.exports.updateStockLevels = updateStockLevels;
