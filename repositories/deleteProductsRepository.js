const dbService = require('../db/dbService');

const deleteProducts = async (id) => {
    const connection = await dbService.createConnection();

    const sql = 'DELETE FROM `products` WHERE `id` = ?;';
    const values = [id]
    return connection.query(sql, values);
}

module.exports.deleteProducts = deleteProducts;
