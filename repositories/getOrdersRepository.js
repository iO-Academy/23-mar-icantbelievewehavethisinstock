const dbService = require('../db/dbService');
const {idToSKU} = require("../functions/id-to-sku");
const {orderDBToJson} = require("../functions/orderDB-to-json")


const getOrders = async () => {
    console.log('Repository: getOrders');



    const connection = await dbService.createConnection()
    const results = await connection.query('SELECT `id`, `order_number`, `customer_email`, `order` FROM `orders`;');

    // turn results into array of [id's, quantities]
    let resultsArray = [];
    let productsArray = [];

    results.forEach((result) => {
        const orderInfo = result.order.split("(").join("").split(")").join("");
        const orderArrayHalf = orderInfo.split(",");
        // get the id's out of the array in this for each loop, then pull out their names also
        const eachOrder = []
        orderArrayHalf.forEach((entry) => {
            eachOrder.push(entry.split(":"))
        })
        resultsArray.push(result.order_number,result.customer_email,eachOrder)
    })
    console.log(resultsArray)

    // resultsArray.forEach((array) => {
    //     console.log(array)
    //     const getOrderDetails = (array) => {
    //         const connection = dbService.createConnection();
    //         const id = array[0];
    //         console.log(id)
    //         const sql = 'SELECT `SKU`, `name` FROM `products` WHERE `id`=?';
    // const values = [id]
    //         return connection.query(sql, values)
    //         console.log(getOrderDetails())
    //     }
    //
    // })

    // do a sql to find the name of the items from the products database [ [ id, quantity ], [ id, quantity ] ]
    // forEach return array[0]
    // resturn the results

    const returning = {order: resultsArray}

    return returning

}

module.exports.getOrders = getOrders;
