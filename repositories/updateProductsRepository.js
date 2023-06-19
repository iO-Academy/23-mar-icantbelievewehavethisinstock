const dbService = require('../db/dbService');
const updateProducts = async (id,updatedDetails) => {
    const connection = await dbService.createConnection()

    const name = updatedDetails.updatedData.name;
    const price = updatedDetails.updatedData.price;


    const sql = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
    const values = [name, price, id];

    return connection.query(sql, values);
}

module.exports.updateProducts = updateProducts;
