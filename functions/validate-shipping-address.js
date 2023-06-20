const validateShippingAddress = (shippingAddress) => {

    const validPostcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

    return ((shippingAddress.shippingAddress.customer_name !== "" && shippingAddress.shippingAddress.customer_name !== null)
        && (shippingAddress.shippingAddress.address_line_1 !== "" && shippingAddress.shippingAddress.customer_name !== null)
        && (shippingAddress.shippingAddress.town_city !== "" && shippingAddress.shippingAddress.customer_name !== null)
        && shippingAddress.shippingAddress.postcode.match(validPostcodeRegex));
}

module.exports.validateShippingAddress = validateShippingAddress;
