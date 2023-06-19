const constants = require('../config/constants')

const validateSKU = (SKU) => {
    let validSKU = false;

    const SKULength = constants.validSKULength;
    const containsICBWHTIS = SKU.startsWith("ICBWHTIS")
    const isSKUcorrectLength = SKU.length <= SKULength

    if (containsICBWHTIS && isSKUcorrectLength) {
        validSKU = true
    }

    return validSKU
}

module.exports.validateSKU = validateSKU;