const dbService = require('../db/dbService');


const getOrders = async () => {
    console.log('Repository: getOrders');

    const connection = await dbService.createConnection()
    const results = connection.query('SELECT `id`, `customer_email`, `customer_name`, `address_line_1`, `address_line_2`,' +
        ' `address_line_3`, `town_city`, `postcode`, `country`, `order` FROM `orders`;');
    const modifiedResults = results.map(row => {
        console.log(10)
        console.log("10")
        string = String(row.order)
        console.log(string)
        const bob = { orders: [ { id: 4, quantity: 3 } ] }
        console.log(bob)
        const stringy2 = JSON.stringify(bob)
        console.log(stringy2)
        const modifiedOrders = JSON.stringify(string);
        return { ...row, order: modifiedOrders }});

    return modifiedResults

}

module.exports.getOrders = getOrders;
