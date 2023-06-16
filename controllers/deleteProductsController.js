const deleteProductsService = require('../services/deleteProductsService');

const deleteProducts = (request, response) => {
    console.log('Controller: deleteProducts');
    const SKU = request.params.SKU;
    deleteProductsService.deleteProducts(SKU).then((result) => res.send(result));
}

module.exports.deleteProducts = deleteProducts;
