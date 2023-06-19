const addProductsService = require('../services/addProductsService');
const getProductsService = require("../services/getProductsService");

const addProducts = (request, response) => {
    console.log('Controller: addProducts');
    getProductsService.getProducts()
        .then((result) => {
            const json = {"products": result}
            response.send(json)
        })
        .catch((error) =>{
            const message = {"message": error.message, "data": []}
            response.status(500).send(message)
        })
}

module.exports.addProducts = addProducts;
