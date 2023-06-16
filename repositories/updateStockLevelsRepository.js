const dbService = require('../db/dbService');

const updateStockLevels = async () => {
    console.log('Repository: updateStockLevels');
    const connection = await dbService.createConnection()
    return connection.query() // SQL HERE
}

module.exports.updateStockLevels = updateStockLevels;
