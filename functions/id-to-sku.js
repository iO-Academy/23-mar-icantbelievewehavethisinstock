const idToSKU = (id) => {
    const characters = 'ICBWHTIS';
    const numberString = String(id)
    let number = '';

    if (numberString.length === 1) {
        number = '000' + id;
    } else if (numberString.length === 2) {
        number = '00' + id;
    } else if (numberString.length === 3) {
        number = '0' + id;
    } else if (numberString.length === 4) {
        number = id;
    } else {
        return "Invalid ID"
    }

    return characters + number;
}

module.exports.idToSKU = idToSKU;
