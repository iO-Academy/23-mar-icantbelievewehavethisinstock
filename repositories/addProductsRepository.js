const dbService = require('../db/dbService');

const addProducts = async () => {
    console.log('Repository: addProducts');

    const connection = await dbService.createConnection()
    return connection.query('INSERT INTO `products` (`SKU`, `name`, `stock_level`, `price`) VALUES ("a", ${name}, ${stock_level}, ${price}) ;')
}

module.exports.addProducts = addProducts;
