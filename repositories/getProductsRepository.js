const dbService = require('../db/dbService');

const getProducts = async () => {
    const connection = await dbService.createConnection();
    return connection.query('SELECT `id`, `SKU`, `name`, `price` FROM `products`;');
}

module.exports.getProducts = getProducts;
