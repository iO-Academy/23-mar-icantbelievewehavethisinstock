const getProductsService = require('../services/getProductsService');

const getProducts = (request, response) => {
    getProductsService.getProducts()
        .then((result) => {
            const json = {"products": result};
            response.send(json);
        })
        .catch((error) => {
            const message = {"message": error.message, "data": []};
            response.status(500).send(message);
        });
}

module.exports.getProducts = getProducts;
