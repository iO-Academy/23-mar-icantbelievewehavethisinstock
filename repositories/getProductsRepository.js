const dbService = require('../db/dbService');

const getProducts = async () => {
    console.log('Repository: getProducts');
    const connection = await dbService.createConnection()
    return connection.query('SELECT * FROM products;')
}

module.exports.getProducts = getProducts;
