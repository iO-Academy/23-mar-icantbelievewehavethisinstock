const createOrdersRepository = require('../repositories/createOrdersRepository');

const createOrder = async (newOrder) => {
    console.log('Service: createOrder');

    // Validation here

    // function - is order number valid

    // function - is email address valid

    // function is shipping address valid

    try {
        return await createOrdersRepository.createOrder(newOrder);
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
}

module.exports.createOrder = createOrder;
