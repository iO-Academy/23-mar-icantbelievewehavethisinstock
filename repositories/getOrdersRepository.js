const dbService = require('../db/dbService');


const getOrders = async () => {
    console.log('Repository: getOrders');

    const connection = await dbService.createConnection()
    return connection.query('SELECT `id`, `customer_email`, `customer_name`, `address_line_1`, `address_line_2`,' +
        ' `address_line_3`, `town_city`, `postcode`, `country`, `order` FROM `products`;');
}

module.exports.getOrders = getOrders;
