const dbService = require('../db/dbService');

const updateStockLevels = async(id, updatedStockLevel) => {
    console.log("Repository: updateStockLevels");
    const connection = await dbService.createConnection();
    const sql = "UPDATE `products` SET `stock_level` = ? WHERE `id` = ?;";
    const values = [updatedStockLevel, id];
    return connection.query(sql, values);
}

module.exports.updateStockLevels = updateStockLevels;
