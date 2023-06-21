const cancelOrdersService = require('../services/cancelOrdersService')

const cancelOrders = (request, response) => {
    const orderNumber = request.params.OrderNumber;

    cancelOrdersService.cancelOrders(orderNumber)
        .then(() => {
            const message = {"message": "Successfully cancelled order."};
            response.send(message);
    })
    .catch((error) => {
        let status = 500;
        const message = {"message": error.message, "data": []};

        if (error.message.startsWith("Invalid")) {
            status = 400;
        }
        response.status(status).send(message);
    });
}

module.exports.cancelOrders = cancelOrders;
