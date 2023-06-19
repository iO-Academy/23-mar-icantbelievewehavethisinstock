const constants = require('../config/constants')

const validateSKU = (SKU) => {
    let validSKU = false;

    const containsICBWHTIS = SKU.startsWith("ICBWHTIS")
    const isSKUcorrectLength = SKU.length <= constants.validSKULength

    if (containsICBWHTIS && isSKUcorrectLength) {
        validSKU = true
    }

    return validSKU
}

module.exports.validateSKU = validateSKU;
