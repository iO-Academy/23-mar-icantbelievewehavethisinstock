const {idToSKU} = require("../functions/id-to-sku");

const orderDBToJson = (orderSQL) => {
    const formattedString = orderSQL.replace(/\(/g, '').replace(/\)/g, ''); // Remove parentheses
    const pairs = formattedString.split(',');

    const idAndQuantity = pairs.map(pair => {
        const [id, quantity] = pair.split(':');
        const sku = idToSKU(id)
        return { "SKU": sku, quantity: Number(quantity) };
    });

    // const sku = idToSKU(idAndQuantity.id)
    //
    return { "SKU": "fred", quantity: idAndQuantity.quantity };
}


module.exports.orderDBToJson = orderDBToJson