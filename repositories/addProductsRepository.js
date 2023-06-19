const dbService = require('../db/dbService');
const idToSKU = require('../functions/id-to-sku')

const addProducts = async (newProduct) => {
    const firstConnection = await dbService.createConnection();
    const sql = 'INSERT INTO `products` (`SKU`, `name`, `stock_level`, `price`) VALUES ("SKU", ?, ?, ?);';
    const values = [newProduct.name, newProduct.stock_level, newProduct.price];
    const result = await firstConnection.query(sql,values);
    const newId = result.insertId;
    const newSKU = idToSKU.idToSKU(newId);
    const secondConnection = await dbService.createConnection();
    secondConnection.query('UPDATE `products` SET `SKU` = "' + newSKU + '" WHERE `id` = ' + newId + ';');
    return "Successfully added new Product: " + newProduct.name + " with new SKU of: " + newSKU;
}

module.exports.addProducts = addProducts;
