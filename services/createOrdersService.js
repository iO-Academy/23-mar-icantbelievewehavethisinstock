const createOrdersRepository = require('../repositories/createOrdersRepository');
const SKUtoID = require('../functions/sku-to-id');
const validateOrderNumber = require('../functions/validate-order-number');
const validateEmailAddress = require('../functions/validate-email-address');
const validateShippingAddress = require('../functions/validate-shipping-address');
const getAllStockLevels = require('../repositories/getAllStockLevelsRepository');

const createOrder = async (newOrder) => {
    if (!validateOrderNumber.validateOrderNumber(newOrder.order.order_number)) {
        const message = "Invalid Order Number";
        throw new Error(message);
    }

    if (!validateEmailAddress.validateEmailAddress(newOrder.order.email_address)) {
        const message = "Invalid Email Address";
        throw new Error(message);
    }

    if (!validateShippingAddress.validateShippingAddress(newOrder.order.shipping_address)) {
        const message = "Invalid Shipping Address";
        throw new Error(message);
    }

    const allStockLevels = await getAllStockLevels.getAllStockLevels();

    let productsStringForDb = [];

    newOrder.order.products.forEach((product) => {
        const id = SKUtoID.SKUToId(product.SKU);
        const orderQuantity = product.quantity;
        const productName = product.name;
        const findProductId = (element) => {
            return element.id === id;
        };
        const productIndex = allStockLevels.findIndex(findProductId);
        const currentStockLevel = allStockLevels[productIndex].stock_level;
        const newStockLevel = currentStockLevel - orderQuantity;

        if (newStockLevel < 0) {
            const message = `Not enough stock of ${productName}.`;
            throw new Error(message);
        } else {
            const stringForDb = `(${productName}:${orderQuantity})`
            productsStringForDb.push(stringForDb);
        }
    })

    productsStringForDb = productsStringForDb.toString();

    try {
        return await createOrdersRepository.createOrder(newOrder, productsStringForDb);
    } catch (error) {
        if (!error.message.startsWith("Invalid")) {
            const message = "Unexpected error.";
            throw new Error(message);
        }
        throw error;
    }
}

module.exports.createOrder = createOrder;
