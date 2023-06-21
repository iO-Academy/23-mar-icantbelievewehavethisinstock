const cancelOrdersRepository = require('../repositories/cancelOrdersRepository');
const validateOrderNumber = require("../functions/validate-order-number");

const cancelOrders = async (orderNumber) => {
    if(!validateOrderNumber.validateOrderNumber(orderNumber)) {
        const message = "Invalid order number";
        throw new Error(message);
    }

    try {
        return await cancelOrdersRepository.cancelOrders(orderNumber);
    } catch (error) {
        if (error.message === 'This order isn\'t open' || error.message === 'This order has already been cancelled') {
            throw error
        } else {
            const message = "Unexpected error";
            throw new Error(message)
        }
    }
}

module.exports.cancelOrders = cancelOrders;
