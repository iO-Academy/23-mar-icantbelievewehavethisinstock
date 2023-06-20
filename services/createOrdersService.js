const createOrdersRepository = require('../repositories/createOrdersRepository');
const SKUtoID = require('../functions/sku-to-id');
const validateOrderNumber = require('../functions/validate-order-number');
const validateEmailAddress = require('../functions/validate-email-address');
const validateShippingAddress = require('../functions/validate-shipping-address');
const getAllStockLevels = require('../repositories/getAllStockLevelsRepository');

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

    const allStockLevels = await getAllStockLevels.getStockAllStockLevels();

    let productsStringForDatabase = [];

    newOrder.order.products.forEach((product) => {
        const id = SKUtoID.SKUToId(product.SKU);
        const quantity = product.quantity;
        const productWithId = (element) => {
            return element.id === id
        }
        const positionInAllStockLevels = allStockLevels.findIndex(productWithId)
        const currentStockLevel = allStockLevels[positionInAllStockLevels].stock_level
        const newStockAmount = currentStockLevel - quantity

        if (newStockAmount < 0) {
            const message = `Not enough stock of ${product.name}`;
            throw new Error(message);
        } else {
            const stringForDb = `(${id}:${quantity})`
            productsStringForDatabase.push(stringForDb);
        }
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
