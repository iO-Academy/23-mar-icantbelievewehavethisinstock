const getOrdersRepository = require('../repositories/getOrdersRepository');

const getOrders = async () => {
    console.log('Service: getOrders');
    try {
        const results = await getOrdersRepository.getOrders();
        let resultsArray = [];
        let eachOrderObject = {};

        results.forEach((result) => {
            const orderInfo = result.products.split("(").join("").split(")").join("");
            const orderArrayHalf = orderInfo.split(",");
            let resultsObject ={};
            const eachOrder = [];
            const keys =["name", "quantity"];
            orderArrayHalf.forEach((entry) => {
                eachOrder.push(entry.split(":"));
                eachOrderObject = eachOrder.map((innerArray) => Object.assign({}, ...innerArray.map((value, index) => ({ [keys[index]]: value}))));
            })

            resultsObject.order_number = result.order_number;
            resultsObject.customer_email = result.customer_email;
            resultsObject.products = eachOrderObject;
            resultsArray.push(resultsObject);
        })

        return resultsArray;
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
};

module.exports.getOrders = getOrders;
