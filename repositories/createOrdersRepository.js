const dbService = require('../db/dbService');

const createOrder = async (newOrder) => {
    console.log('Repository: createOrder');
    const connection = await dbService.createConnection();

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