const constants = require('../config/constants');

const SKUToId = (SKU) => {
    if (SKU.length !== constants.validSKULength || !SKU.startsWith('ICBWHTIS')) {
        return 'Invalid SKU supplied'
    } else {
        const numbers = SKU.slice(8);
        return parseInt(numbers);
    }
}

module.exports.SKUToId = SKUToId;
