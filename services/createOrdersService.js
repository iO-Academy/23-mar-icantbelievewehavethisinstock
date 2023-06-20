const createOrdersRepository = require('../repositories/createOrdersRepository');
const SKUtoID = require('../functions/sku-to-id');
const getStockLevels = require('../repositories/getStockLevelsRepository');
const validateOrderNumber = require('../functions/validate-order-number');
const validateEmailAddress = require('../functions/validate-email-address');
const validateShippingAddress = require('../functions/validate-shipping-address');

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

    newOrder.order.products.forEach(async (product) => {
        const id = SKUtoID.SKUToId(product.SKU);
        const currentStockLevels = await getStockLevels.getStockLevels(id);
        const currentStockLevelsNumber = await currentStockLevels.map(stock_level => stock_level.stock_level);
        const newStockAmount = currentStockLevelsNumber[0] + product.quantity;

        if (newStockAmount < 0) {
            const message = `Out of stock of ${product.name}`
            throw new Error(message)
        }
    })

    let productsStringForDatabase = [];

    newOrder.order.products.forEach((product) => {
        const id = SKUtoID.SKUToId(product.SKU);
        const quantity = product.quantity;
        const stringForDb = `(${id}:${quantity})`
        productsStringForDatabase.push(stringForDb);
    })

    productsStringForDatabase = productsStringForDatabase.toString();

    try {
        return await createOrdersRepository.createOrder(newOrder, productsStringForDatabase);
    } catch (error) {
        if (!error.message.startsWith("Invalid")) {
            const message = "Unexpected error";
            throw new Error(message);
        }
        throw error;
    }
}

module.exports.createOrder = createOrder;
