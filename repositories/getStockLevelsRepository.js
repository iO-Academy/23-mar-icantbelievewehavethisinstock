const dbService = require('../db/dbService');

const getStockLevels = async (id) => {
    console.log('Repository: getStockLevels');

    const connection = await dbService.createConnection()
    return connection.query('SELECT `name`, `price`, `stock_level` FROM `products` WHERE `id` =' + id + ';');
}

module.exports.getStockLevels = getStockLevels;
