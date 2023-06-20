const createOrdersRepository = require('../repositories/createOrdersRepository');
const SKUtoID = require('../functions/sku-to-id');
const getStockLevels = require('../repositories/getStockLevelsRepository');

const createOrder = async (newOrder) => {
    console.log('Service: createOrder');

    if(!validateOrderNumber.validateOrderNumber(newOrder.order.order_number)) {
        const message = "Invalid Order Number";
        throw new Error(message);
    }

    if(!validateEmailAddress.validateEmailAddress(newOrder.order.email_address)) {
        const message = "Invalid Email Address";
        throw new Error(message);
    }

    if(!validateShippingAddress.validateShippingAddress(newOrder.order.shipping_address)) {
        const message = "Invalid Shipping Address";
        throw new Error(message);
    }



    let productsStringForDatabase = [];

    newOrder.order.products.forEach((product) => {
        const id = SKUtoID.SKUToId(product.SKU);
        const quantity = product.quantity;
        const stringForDb = `(${id}:${quantity})`
        productsStringForDatabase.push(stringForDb);
    })

    try {
        return await createOrdersRepository.createOrder(newOrder, productsStringForDatabase);
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
}

module.exports.createOrder = createOrder;
