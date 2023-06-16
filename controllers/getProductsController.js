const getProductsService = require('../services/getProductsService');

const getProducts = (request, response) => {
    console.log('Controller: getProducts');
    getProductsService.getProducts().then((result) => response.send(result));
}

module.exports.getProducts = getProducts;
