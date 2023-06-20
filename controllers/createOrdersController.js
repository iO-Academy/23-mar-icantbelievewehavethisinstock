const createOrdersService = require('../services/createOrdersService')

const createOrder = (request, response) => {
    console.log('Controller: createOrder')
    const newOrder = request.body;

    createOrdersService.createOrder(newOrder)
        .then((result) => {
            const formattedResult = result;
            response.send(formattedResult)
        })
        .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []}

        if (error.message.startsWith("Invalid") || error.message.startsWith('Out')) {
            status = 400;
        }
        response.status(status).send(message);
    })
}

module.exports.createOrder = createOrder;
