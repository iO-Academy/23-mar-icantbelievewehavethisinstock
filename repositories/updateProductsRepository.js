const dbService = require('../db/dbService');

const updateProducts = async () => {
    console.log('Repository: updateProducts');
    const connection = await dbService.createConnection()
    return connection.query() // SQL HERE
}

module.exports.updateProducts = updateProducts;
