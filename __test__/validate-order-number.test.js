const { validateOrderNumber } = require('../functions/validate-order-number');

describe('validates order number received', () => {
    it('returns True if given valid order number', () => {
        expect(validateOrderNumber('ORDER0044')).toBeTruthy();
    });
    it('returns True if given valid order number', () => {
        expect(validateOrderNumber('ORDER1111')).toBeTruthy();
    });
    it('returns False if given invalid order number', () => {
        expect(validateOrderNumber('Dorris')).toBeFalsy();
    });
    it('returns False if given invalid order number', () => {
        expect(validateOrderNumber('ORDER1')).toBeFalsy();
    });
    it('returns False if given invalid order number', () => {
        expect(validateOrderNumber('ORDER19939020')).toBeFalsy();
    });
});
