const dbService = require('../db/dbService');

const getStockLevelsById = async (id) => {
    const connection = await dbService.createConnection()
    const sql = ('SELECT `name`, `price`, `stock_level` FROM `products` WHERE `id` = ?;');
    const values = [id];
    return connection.query(sql, values);
}

module.exports.getStockLevelsById = getStockLevelsById;
