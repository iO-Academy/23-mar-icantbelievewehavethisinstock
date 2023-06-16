const dbService = require('../db/dbService');

const getStockLevels = async () => {
    console.log('Repository: getStockLevels');
    const connection = await dbService.createConnection()
    return connection.query() // SQL here
}

module.exports.getStockLevels = getStockLevels;
