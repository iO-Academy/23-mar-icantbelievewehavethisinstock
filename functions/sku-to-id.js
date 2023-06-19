const SKUToId = (SKU) => {
    const numbers = SKU.slice(8);
    return parseInt(numbers);
}

module.exports.SKUToId = SKUToId;