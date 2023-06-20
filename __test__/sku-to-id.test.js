const { SKUToId: SkuToIdTest } = require('../functions/sku-to-id');
const constants = require('../config/constants');


describe('convert SKU to Id', () => {
    it('returns Id of 34 if given the SKU of ICBWHTIS0034', () => {
        expect(SkuToIdTest('ICBWHTIS0034')).toBe(34);
    });

    it('returns Id of 4567 if given the SKU of ICBWHTIS4567', () => {
        expect(SkuToIdTest('ICBWHTIS4567')).toBe(4567);
    });

    it('returns Id of 1 if given the SKU of ICBWHTIS0001', () => {
        expect(SkuToIdTest('ICBWHTIS0001')).toBe(1);
    });

    it('returns Error if given a non SKU', () => {
        expect(SkuToIdTest('ergerh')).toBe('Invalid SKU supplied');
    });

    it('returns Error if given an incomplete SKU', () => {
        expect(SkuToIdTest('ICBWHTIS01')).toBe('Invalid SKU supplied');
    });
});
