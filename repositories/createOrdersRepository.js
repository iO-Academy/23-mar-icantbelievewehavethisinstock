const dbService = require('../db/dbService');
const updateStockLevels = require('./updateStockLevelsRepository');
const SKUToId = require("../functions/sku-to-id");
const getAllStockLevels = require("./getAllStockLevelsRepository");

const createOrder = async (newOrder, productsStringForDatabase) => {
    const dbConnection = await dbService.createConnection();
    const orderNumber = newOrder.order.order_number;
    const customerEmail = newOrder.order.email_address;
    const customerName = newOrder.order.shipping_address.customer_name;
    const addressLine1 = newOrder.order.shipping_address.address_line_1
    const townCity = newOrder.order.shipping_address.town_city
    const postcode = newOrder.order.shipping_address.postcode
    const products = newOrder.order.products
    let addressLine2 = null;
    let addressLine3 = null;


    if (newOrder.order.shipping_address.address_line_2 !== null) {
        addressLine2 = newOrder.order.shipping_address.address_line_2;
    }

    if (newOrder.order.shipping_address.address_line_3 !== null) {
        addressLine3 = newOrder.order.shipping_address.address_line_3;
    }

    const orderNumbersInDb = await dbConnection.query('SELECT `order_number` FROM `orders`;');
    const orderNumbersArray = await orderNumbersInDb.map((order) => order.order_number);
    if (orderNumbersArray.includes(orderNumber)) {
        const error = "Invalid order number - Already exists in database";
        throw new Error(error);
    } else {
        try {
            const sql = 'INSERT INTO `orders` (`order_number`, `customer_email`, `customer_name`, `address_line_1`, `address_line_2`, `address_line_3`, `town_city`, `postcode`, `products`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
            const values = [orderNumber, customerEmail, customerName, addressLine1, addressLine2, addressLine3, townCity, postcode, productsStringForDatabase];

            const allStockLevels = await getAllStockLevels.getAllStockLevels();

            products.forEach((product) => {
                const id = SKUToId.SKUToId(product.SKU);
                const quantity = product.quantity;
                const findProductId = (element) => {
                    return element.id === id;
                };
                const positionInAllStockLevels = allStockLevels.findIndex(findProductId);
                const currentStockLevel = allStockLevels[positionInAllStockLevels].stock_level;
                const newStockLevel = currentStockLevel - quantity;

                if (newStockLevel >= 0) {
                    updateStockLevels.updateStockLevels(id, newStockLevel)
                }
            })
            return await dbConnection.query(sql, values);
        } catch {
            const message = "There was an error processing your order";
            throw new Error(message);
        }
    }
}

module.exports.createOrder = createOrder;
