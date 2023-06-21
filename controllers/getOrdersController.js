const getOrdersService = require('../services/getOrdersService');

const getOrders = (request, response) => {
    getOrdersService.getOrders()
        .then((result) => {
            const json = {"orders": result}
            response.send(json)
        })
        .catch((error) => {
            const message = {"message": error.message, "data": []}
            response.status(500).send(message)
        })
}

module.exports.getOrders = getOrders;
