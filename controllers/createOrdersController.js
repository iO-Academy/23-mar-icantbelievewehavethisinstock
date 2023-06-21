const createOrdersService = require('../services/createOrdersService');

const createOrder = (request, response) => {
    const newOrder = request.body;

    createOrdersService.createOrder(newOrder)
        .then(() => {
            const successMessage = {"message": "Successfully placed order"};
            response.send(successMessage);
        })
        .catch((error) => {
            let status = 500;
            const message = {"message": error.message, "data": []};

            if (error.message.startsWith("Invalid") || error.message.startsWith('Not')) {
                status = 400;
            }
            response.status(status).send(message);
        })
}

module.exports.createOrder = createOrder;
