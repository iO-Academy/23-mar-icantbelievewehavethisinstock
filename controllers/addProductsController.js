const addProductsService = require('../services/addProductsService');

const addProducts = (request, response) => {
    console.log('Controller: addProducts');
    const newItem = req.body;
    addProductsService.addProducts(newItem).then((result) => res.send(result));
}

module.exports.addProducts = addProducts;
