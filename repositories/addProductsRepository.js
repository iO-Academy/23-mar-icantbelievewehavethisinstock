const dbService = require('../db/dbService');
const idToSKU = require('../functions/id-to-sku')

const addProducts = async () => {
    const connection = await dbService.createConnection()
    const result = await connection.query('INSERT INTO `products` (`SKU`, `name`, `stock_level`, `price`) VALUES ("a", "name", 12, 4000);')
    const newId = result.insertId


    return result
}

module.exports.addProducts = addProducts;
