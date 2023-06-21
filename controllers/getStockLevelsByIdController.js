const getStockLevelsByIdService = require('../services/getStockLevelsByIdService');

const getStockLevelsById = (request, response) => {
    const SKU = request.params.SKU;

    getStockLevelsByIdService.getStockLevelsById(SKU)
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

module.exports.getStockLevelsById = getStockLevelsById;
