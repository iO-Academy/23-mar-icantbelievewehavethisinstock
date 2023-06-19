const updateProductsService = require('../services/updateProductsService');

const updateProducts = (request, response) => {
    console.log('Controller: updateProducts');
    const SKU = request.params.SKU;
    const updatedProductInfo = request.body
    updateProductsService.updateProducts(SKU, updatedProductInfo)
        .then(() => {
            const message = {"message": "Successfully updated product."}
            response.send(message);
    })
    .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Invalid")) {
            status = 400;
        }
        response.status(status).send(message);
    });
}

module.exports.updateProducts = updateProducts;
