const dbService = require('../db/dbService');

const createOrder = async (newOrder, productsStringForDatabase) => {
    console.log('Repository: createOrder');
    const connection = await dbService.createConnection();

    const orderNumbersInDb = await dbConnection.query('SELECT `order` FROM `orders`;');
    const orderNumbersResult = await orderNumbersInDb.map(order => order.order)
    if (orderNumbersResult.includes(newOrder.order.order_number)) {
        const message = "Invalid order number - Already exists in database";
        throw new Error(message);
    }




    const checkStockLevels = await connection.query()
    // forEach newOrder.order.products,
    // if name = actual product name && if quantity in db > quantity in createOrder
    // return true or false to array

    // if array does not contain false
    const updateStockLevels = await connection.query() // Update stock levels
    const createOrder = await connection.query() //SQL for creating order
    // Or do both in same query

    // How to get them to do subsequent queries?
}

module.exports.createOrder = createOrder;
