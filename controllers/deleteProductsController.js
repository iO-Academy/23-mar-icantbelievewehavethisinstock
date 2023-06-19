const deleteProductsService = require('../services/deleteProductsService');

const deleteProducts = (request, response) => {
    console.log('Controller: deleteProducts');
    const SKU = request.params.SKU;
    deleteProductsService.deleteProducts(SKU)
        .then((result) => {
            const message = {"message": "Successfully deleted product."}
            response.send(message)
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

module.exports.deleteProducts = deleteProducts;
