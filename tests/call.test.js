const duckCount = require('../call.js');

describe('duckCount function', function() {
    it('should return a duck count if a proper input is given', () => {
        const result = duckCount({ quack: true }, {});
        expect(result).toBe(1);
        });
    it('should return 0 when an empty array input is given', () => {
        const result = duckCount([{}]);
        expect(result).toBe(0);
    });
    it('should return 0 when a string input is given', () => {
        const result = duckCount(['Hello']);
        expect(result).toBe(0);
    });
    it('should return 0 when a integer input is given', () => {
        const result = duckCount([5]);
        expect(result).toBe(0);
    });
    it('should return 0 when a decimal input is given', () => {
        const result = duckCount([5.5]);
        expect(result).toBe(0);
    });
    it('should return 0 when a boolean input is given', () => {
        const result = duckCount([true]);
        expect(result).toBe(0);
    });
});