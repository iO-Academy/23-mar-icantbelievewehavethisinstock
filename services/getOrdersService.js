const allOrdersQueryResponse = require('../repositories/getOrdersRepository');

const getOrders = async () => {
    try {
        const results = await allOrdersQueryResponse.getOrders();
        let allOrdersArray = [];

        results.forEach((result) => {
            const productInfo = result.products.split("(").join("").split(")").join("");
            const currentOrderArray = productInfo.split(",");
            let productsForEachOrderObject = {};
            let resultsObject = {};
            const eachOrder = [];
            const productsOrderKeys = ["name", "quantity"];
            currentOrderArray.forEach((order) => {
                eachOrder.push(order.split(":"));
                productsForEachOrderObject = eachOrder.map((innerArray) => Object.assign({}, ...innerArray.map((value, index) => ({[productsOrderKeys[index]]: value}))));
            });

            resultsObject.order_number = result.order_number;
            resultsObject.customer_email = result.customer_email;
            resultsObject.products = productsForEachOrderObject;
            allOrdersArray.push(resultsObject);
        })
        return allOrdersArray;
    } catch {
        const message = "Unexpected error.";
        throw new Error(message);
    }
};

module.exports.getOrders = getOrders;
