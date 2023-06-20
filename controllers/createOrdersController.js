const createOrdersService = require('../services/createOrdersService')

const createOrder = (request, response) => {
    console.log('Service: createOrder')
    const newOrder = request.body;

    createOrdersService.createOrder(newOrder)
        .then((result) => {
            response.send(result)
        }).catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Invalid")) {
            status = 400;
        }
        response.status(status).send(message);
    })
}

module.exports.createOrder = createOrder;
