const updateProductsService = require('../services/updateProductsService');

const updateProducts = (request, response) => {
    console.log('Controller: updateProducts');
    const SKU = request.params.SKU;
    const updatedProductInfo = request.query
    updateProductsService.updateProducts(SKU, updatedProductInfo)
        .then((result) => res.send(result));
}

module.exports.updateProducts = updateProducts;
