const {validateShippingAddress} = require('../functions/validate-shipping-address');

describe('checks if supplied shipping address is valid', () => {
    it('returns True if given valid address', () => {
        const validAddress = {shippingAddress: {
            customer_name: "Jeff Bezos",
            address_line_1: "1 Jeff Street",
            town_city: "Jeffsville",
            postcode: "J3 3FF"
        }}
        expect(validateShippingAddress(validAddress)).toBeTruthy();
    });

    it('returns false if given incomplete details', () => {
        const validAddress = {shippingAddress: {
                customer_name: "",
                address_line_1: "1 Jeff Street",
                town_city: "Jeffsville",
                postcode: "J3 3FF"
            }}
        expect(validateShippingAddress(validAddress)).toBeFalsy();
    });
    it('returns fale if given invalid postcode', () => {
        const validAddress = {shippingAddress: {
                customer_name: "",
                address_line_1: "1 Jeff Street",
                town_city: "Jeffsville",
                postcode: "J37790HT"
            }}
        expect(validateShippingAddress(validAddress)).toBeFalsy();
    });
});
