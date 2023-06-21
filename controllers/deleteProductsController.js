const deleteProductsService = require('../services/deleteProductsService');

const deleteProducts = (request, response) => {
    const SKU = request.params.SKU;

    deleteProductsService.deleteProducts(SKU)
        .then(() => {
            const message = {"message": "Successfully deleted product."};
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

module.exports.deleteProducts = deleteProducts;
