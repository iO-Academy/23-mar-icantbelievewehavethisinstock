const cancelOrdersRepository = require('../repositories/cancelOrdersRepository');
const validateOrderNumber = require("../functions/validate-order-number");

const cancelOrders = async (orderNumber) => {
    if (!validateOrderNumber.validateOrderNumber(orderNumber)) {
        const message = "Invalid order number.";
        throw new Error(message);
    }

    try {
        return await cancelOrdersRepository.cancelOrders(orderNumber);
    } catch (error) {
        if (error.message.endsWith("exist.") || error.message.endsWith("open.") || error.message.endsWith('cancelled.')) {
            throw error
        } else {
            const message = "Unexpected error.";
            throw new Error(message)
        }
    }
}

module.exports.cancelOrders = cancelOrders;
