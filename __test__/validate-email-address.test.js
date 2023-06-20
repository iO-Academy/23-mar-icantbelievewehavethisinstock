const { validateEmailAddress } = require('../functions/validate-email-address')

describe('validates email address received', () => {
    it('returns True if given valid email', () => {
        expect(validateEmailAddress('bob@bobby.com')).toBeTruthy();
    });
    it('returns True if given valid email', () => {
        expect(validateEmailAddress('bob@bobby.co.za')).toBeTruthy();
    });
    it('returns False if given invalid email', () => {
        expect(validateEmailAddress('Dorris')).toBeFalsy();
    });
});