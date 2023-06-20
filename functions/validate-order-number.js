const constants = require('../config/constants')

const validateOrderNumber = (OrderNumber) => {
    let validOrderNumber = false;

    const startsWithORDER = OrderNumber.startsWith("ORDER");
    const isOrderNumberCorrectLength = OrderNumber.length === constants.validOrderNumberLength;

    if (startsWithORDER && isOrderNumberCorrectLength) {
        validOrderNumber = true;
    }
    return validOrderNumber;
}

module.exports.validateOrderNumber = validateOrderNumber;
