const dbService = require('../db/dbService');

const getOrders = async () => {
    console.log('Repository: getOrders');
    const connection = await dbService.createConnection()
    const results = await connection.query('SELECT `id`, `order_number`, `customer_email`, `products` FROM `orders`;');

    return results
}

module.exports.getOrders = getOrders;
