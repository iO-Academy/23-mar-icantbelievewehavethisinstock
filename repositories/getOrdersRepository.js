const dbService = require('../db/dbService');

const getOrders = async () => {
    const connection = await dbService.createConnection();
    return connection.query('SELECT `id`, `order_number`, `customer_email`, `products` FROM `orders`;');
}

module.exports.getOrders = getOrders;
