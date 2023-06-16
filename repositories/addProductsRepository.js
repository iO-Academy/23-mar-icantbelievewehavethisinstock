const dbService = require('../db/dbService');

const addProducts = async () => {
    console.log('Repository: addProducts');
    const connection = await dbService.createConnection()
    return connection.query() // SQL QUERY HERE
}

module.exports.addProducts = addProducts;
