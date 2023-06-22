const dbService = require('../db/dbService');
const idToSKU = require('../functions/id-to-sku');

const addProducts = async (newProduct) => {
    const dbConnection = await dbService.createConnection();
    const namesInDb = await dbConnection.query('SELECT `name` FROM `products`;');
    const namesResult = await namesInDb.map(name => name.name);

    if (namesResult.includes(newProduct.name)) {
        const message = "Invalid entry - Already exists in database.";
        throw new Error(message);
    } else {
        const sql = 'INSERT INTO `products` (`SKU`, `name`, `stock_level`, `price`) VALUES ("SKU", ?, ?, ?);';
        const values = [newProduct.name, newProduct.stock_level, newProduct.price];
        const result = await dbConnection.query(sql, values);
        const newId = result.insertId;
        const newSKU = idToSKU.idToSKU(newId);
        dbConnection.query('UPDATE `products` SET `SKU` = "' + newSKU + '" WHERE `id` = ' + newId + ';');
        return {name: newProduct.name, SKU: newSKU};
    }
}

module.exports.addProducts = addProducts;
