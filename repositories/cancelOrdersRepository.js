const dbService = require('../db/dbService');

const cancelOrders = async (orderNumber) => {
    const connection = await dbService.createConnection();

    const getProductsFromOrderSQL = 'SELECT `products`, `order_open`, `order_cancelled` FROM `orders` WHERE `order_number` = ?';
    const getProductsFromOrdersValues = [orderNumber];
    const getProductsAndOrderStatusFromOrderNumber = await connection.query(getProductsFromOrderSQL, getProductsFromOrdersValues);

    const orderOpen = getProductsAndOrderStatusFromOrderNumber[0].order_open;
    const orderCancelled = getProductsAndOrderStatusFromOrderNumber[0].order_cancelled;

    if(!orderOpen) {
        const message = "This order isn't open.";
        throw new Error(message);
    } else if (orderCancelled) {
        const message = "This order has already been cancelled.";
        throw new Error(message);
    } else {
        const orderQueryNoParentheses = getProductsAndOrderStatusFromOrderNumber[0].products.split("(").join("").split(")").join("");
        const orderQueryNoCommas = orderQueryNoParentheses.split(",");

        let productsArray = []
        orderQueryNoCommas.forEach((entry) => {
            productsArray.push(entry.split(":"));
        })

        let whenClause = '';
        let whereInClause = '';
        productsArray.forEach((entry) => {
            whenClause += 'WHEN \'' + entry[0] + '\' THEN stock_level + ' + entry[1] + ' ';
            whereInClause += `'${entry[0]}', `;
        })

        whereInClause = whereInClause.slice(0, -2); // This removes the space and the comma from the last entry in whereInClause to avoid issues in the query

        const cancelOrdersSQL = 'UPDATE `orders` SET `order_open` = 0, `order_cancelled` = 1 WHERE `order_number` = ?;';
        const cancelOrdersValues = [orderNumber];
        connection.query(cancelOrdersSQL, cancelOrdersValues);
        const resetStockLevelSQL = 'UPDATE `products` SET `stock_level` = CASE `name` ' + whenClause + ' ELSE `stock_level` END WHERE `name` IN (' + whereInClause + ');';
        connection.query(resetStockLevelSQL);
        return "Successfully cancelled order.";
    }
}

module.exports.cancelOrders = cancelOrders;
