const addProductsService = require('../services/addProductsService');

const addProducts = (request, response) => {
    const newProduct = request.body;
    addProductsService.addProducts(newProduct)
        .then((result) => {
            const json = {"message": "Successfully added new Product: " + result.name + " with new SKU of: " + result.SKU + "."};
            response.send(json);
        })
        .catch((error) => {
            if (error.message.startsWith('Invalid')) {
                const message = {"message": error.message, "data": []};
                response.status(400).send(message);
            } else {
                const message = {"message": error.message, "data": []};
                response.status(500).send(message);
            }
        })
};

module.exports.addProducts = addProducts;
