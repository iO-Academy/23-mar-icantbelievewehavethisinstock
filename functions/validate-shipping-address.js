const validateShippingAddress = (shippingAddress) => {
    let validShippingAddress = false;
    let validateArray = [];

    const validPostcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

    if (typeof shippingAddress.customer_name === String) {
        validateArray.push(1);
    } else {
        validateArray.push(0);
    }

    if (typeof shippingAddress.address_line_1 === String) {
        validateArray.push(1);
    } else {
        validateArray.push(0);
    }

    if (typeof shippingAddress.town_city === String) {
        validateArray.push(1);
    } else {
        validateArray.push(0);
    }

    if (shippingAddress.postcode.match(validPostcodeRegex)) {
        validateArray.push(1);
    } else {
        validateArray.push(0);
    }

    if (!validateArray.includes(0)) {
        validShippingAddress = true;
    }

    return validShippingAddress;
}

module.exports.validateShippingAddress = validateShippingAddress;
