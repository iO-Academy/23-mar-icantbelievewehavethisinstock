const createOrdersRepository = require('../repositories/createOrdersRepository');

const createOrder = async (newOrder) => {
    console.log('Service: createOrder');

    // Validation here

    // function - is order number valid
    if(!validateOrderNumber.validateOrderNumber(newOrder.order.order_number)) { // something like this
        const message = "Invalid Order Number";
        throw new Error(message);
    }

    // function - is email address valid
    if(!validateEmailAddress.validateEmailAddress(newOrder.order.email_address)) { // something like this
        const message = "Invalid Email Address";
        throw new Error(message);
    }

    // function is shipping address valid
    if(!validateShippingAddress.validateShippingAddress(newOrder.order.shipping_address)) { // something like this
        const message = "Invalid Shipping Address";
        throw new Error(message);
    }

    try {
        return await createOrdersRepository.createOrder(newOrder);
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
}

module.exports.createOrder = createOrder;
