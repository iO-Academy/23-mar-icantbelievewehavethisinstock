const dbService = require('../db/dbService');

const updateStockLevels = async() => {
    console.log("Repository: updateStockLevels");
    const connection = await dbService.createConnection()
    return connection.query("UPDATE `products` SET `stock_level` = `stock_level` + ? WHERE `SKU` = ?");
}

module.exports.updateStockLevels = updateStockLevels;
