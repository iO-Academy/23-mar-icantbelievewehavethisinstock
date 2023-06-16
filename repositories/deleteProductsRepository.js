const dbService = require('../db/dbService');

const deleteProducts = async () => {
    console.log('Repository: deleteProducts');
    const connection = await dbService.createConnection()
    return connection.query()//sql here
}

module.exports.deleteProducts = deleteProducts;