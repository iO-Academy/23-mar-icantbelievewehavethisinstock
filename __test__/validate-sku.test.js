const { validateSKU } = require('../functions/validate-sku');

describe('checks if supplied SKU is valid', () => {
    it('returns True if given ICBWHTIS0034', () => {
        expect(validateSKU('ICBWHTIS0034')).toBeTruthy();
    });

    it('returns True if given ICBWHTIS3333', () => {
        expect(validateSKU('ICBWHTIS3333')).toBeTruthy();
    });

    it('returns False if given ICBWHTIS3', () => {
        expect(validateSKU('ICBWHTIS3')).toBeFalsy();
    });

    it('returns False if given ICBWHTIS35555', () => {
        expect(validateSKU('ICBWHTIS35555')).toBeFalsy();
    });
});
