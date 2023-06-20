const dbService = require('../db/dbService');
const updateStockLevels = require('./updateStockLevelsRepository');
const SKUToId = require("../functions/sku-to-id");
const getStockLevels = require('../repositories/getStockLevelsRepository');
const createOrder = async (newOrder, productsStringForDatabase) => {
    console.log('Repository: createOrder');
    const dbConnection = await dbService.createConnection();

    const orderNumber = newOrder.order.order_number;
    const customerEmail = newOrder.order.email_address;
    const customerName = newOrder.order.shipping_address.customer_name;
    const address_line_1 = newOrder.order.shipping_address.address_line_1
    const townCity = newOrder.order.shipping_address.town_city
    const postcode = newOrder.order.shipping_address.postcode
    const products = newOrder.order.products
    let address_line_2 = null;
    let address_line_3 = null;

    if (newOrder.order.address_line_2 != null) {
        address_line_2 = newOrder.order.shipping_address.address_line_2;
    }

    if (newOrder.order.address_line_3 != null) {
        address_line_3 = newOrder.order.shipping_address.address_line_3;
    }

    const orderNumbersInDb = await dbConnection.query('SELECT `order_number` FROM `orders`;');
    const orderNumbersResult = await orderNumbersInDb.map((order) => order.order_number);

    if (orderNumbersResult.includes(orderNumber)) {
        const error = "Invalid order number - Already exists in database";
        throw new Error(error);
    } else {
        try {
            const sql = 'INSERT INTO `orders` (`order_number`, `customer_email`, `customer_name`, `address_line_1`, `address_line_2`, `address_line_3`, `town_city`, `postcode`, `products`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
            const values = [orderNumber, customerEmail, customerName, address_line_1, address_line_2, address_line_3, townCity, postcode, productsStringForDatabase];

            products.forEach(async (product) => {
                const id = SKUToId.SKUToId(product.SKU);
                const quantity = product.quantity;
                const stockLevelQuery = await getStockLevels.getStockLevels(id)
                const stockLevel = stockLevelQuery[0].stock_level
                const newStockLevel = stockLevel + quantity
                await updateStockLevels.updateStockLevels(id, newStockLevel)
            })
            return await dbConnection.query(sql, values);
        } catch {
            const message = "There was an error processing your order";
            throw new Error(message);
        }
    }
}

module.exports.createOrder = createOrder;
