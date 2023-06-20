const { idToSKU } = require('../functions/id-to-sku');


describe('convert Id to SKU', () => {
    it('returns SKU with 3 trailing 0s if given an Id with a single character', () => {
        expect(idToSKU(6)).toBe('ICBWHTIS0006');
    });

    it('returns SKU with 1 trailing 0 if given an Id with 3 characters', () => {
        expect(idToSKU(256)).toBe('ICBWHTIS0256');
    });

    it('returns invalid if given an Id with more than 4 characters', () => {
        expect(idToSKU(43256)).toBe('Invalid ID');
    });


});
