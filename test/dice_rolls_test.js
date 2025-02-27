const Dice = require('../scripts/dice_rolls');
const assert = require('assert');

describe('capture input', () => {
    it('should return button clicked', () => {
        let expected = 'button clicked';
        let result = Dice.numDiceBtnListener();
        assert.equal(result, expected);
    })
})