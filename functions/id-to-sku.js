const idToSKU = (id) => {
    const characters = 'ICBWHTIS';
    let number = '';

    if (id.length === 1) {
        number = '000' + id;
    } else if (id.length === 2) {
        number = '00' + id;
    } else if (id.length === 3) {
        number = '0' + id;
    } else if (id.length === 4) {
        number = id;
    } else {
        return "Invalid ID"
    }

    return characters + number;
}

modules.exports.idToSKU = idToSKU;
