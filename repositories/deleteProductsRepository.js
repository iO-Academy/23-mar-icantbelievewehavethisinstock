const dbService = require('../db/dbService');

const deleteProducts = async (id) => {
    console.log('Repository: deleteProducts');
    const connection = await dbService.createConnection()

    return connection.query('DELETE FROM `products` WHERE `id` =' + id + ';');
}

module.exports.deleteProducts = deleteProducts;
