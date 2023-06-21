const dbService = require('../db/dbService');

const getAllStockLevels = async () => {
    const connection = await dbService.createConnection()
    const sql = ('SELECT `id`, `stock_level` FROM `products`;');
    return connection.query(sql);
}

module.exports.getAllStockLevels = getAllStockLevels;
