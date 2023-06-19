const updateStockLevelsService = require('../services/updateStockLevelsService')

const updateStockLevels = (request, response) => {
    console.log('Controller: updateStockLevels');
    const SKU = request.params.SKU;

    updateStockLevelsService
    .updateStockLevels(SKU)
    .then(() => {
        const message = {"message": "Successfully updated stock levels for product."}
        response.status(200).json(message);
    })
    .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Invalid")) {
            status = 400;
        }
        response.status(status).send(message);
    })
}

module.exports.updateStockLevels = updateStockLevels;
