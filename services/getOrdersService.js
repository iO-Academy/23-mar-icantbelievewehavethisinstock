const getOrdersRepository = require('../repositories/getOrdersRepository');
const {json} = require("express");

const getOrders = async () => {
    console.log('Service: getOrders');
    const stringy = JSON.stringify({ orders: [ { id: 4, quantity: 3 } ] })
// console.log(stringy)
    const bob = { orders: [ { id: 4, quantity: 3 } ] }
    const stringy2 = JSON.stringify(bob)
    // console.log(stringy2)

    // const parse = JSON.parse('{"orders":[{"id":4,"quantity":3}]}')
    // console.log(parse)
    try {
        return await getOrdersRepository.getOrders();
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
};

module.exports.getOrders = getOrders;