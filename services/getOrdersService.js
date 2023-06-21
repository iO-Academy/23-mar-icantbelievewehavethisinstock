const getOrdersRepository = require('../repositories/getOrdersRepository');

const getOrders = async () => {
    console.log('Service: getOrders');
    try {
        return await getOrdersRepository.getOrders();
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
};

module.exports.getOrders = getOrders;