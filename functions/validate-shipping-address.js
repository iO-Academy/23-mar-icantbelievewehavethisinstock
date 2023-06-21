const validateShippingAddress = (shippingAddress) => {

    const validPostcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

    return ((shippingAddress.customer_name !== "" && shippingAddress.customer_name !== null)
        && (shippingAddress.address_line_1 !== "" && shippingAddress.customer_name !== null)
        && (shippingAddress.town_city !== "" && shippingAddress.customer_name !== null)
        && shippingAddress.postcode.match(validPostcodeRegex));
}

module.exports.validateShippingAddress = validateShippingAddress;
