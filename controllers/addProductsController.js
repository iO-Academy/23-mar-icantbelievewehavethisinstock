const addProductsService = require('../services/addProductsService');

const addProducts = (request, response) => {
    const newProduct = request.body
    addProductsService.addProducts(newProduct)
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
