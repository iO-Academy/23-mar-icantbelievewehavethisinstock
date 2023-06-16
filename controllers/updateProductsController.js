const updateProductsService = require('../services/updateProductsService');

const updateProducts = (request, response) => {
    console.log('Controller: updateProducts');
    const SKU = request.params.SKU;
    const updatedProductInfo = request.body
    updateProductsService.updateProducts(SKU, updatedProductInfo).then((result) => {response.send(result);
    })
    .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Invalid")) {
            status = 400;
        }
        res.status(status).send(message);
        // console.error('Error updating products:', error);
        // response.status(500).send('Internal Server Error');
    });
}

module.exports.updateProducts = updateProducts;
