import cues from '../data/cues.js';
import { cart } from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal, } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('utility');

test('Find product by id', assert => {
    const id = 'peachauer';
    const expected = 'peachauer';
    const foundCue = findById(cues, id);
    assert.ok(foundCue);
    assert.deepEqual(foundCue.id, expected);
});
test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;
    const foundCue = findById(cues, id);
    assert.equal(foundCue, expected);
});
test('calculate line total', (assert) => {
    const quantity = 10;
    const price = 900;
    const expected = 9000;
    const total = calcLineTotal(quantity, price);
    assert.equal(total, expected);
});
test('calculate order total', (assert) => {
    const expected = 45000;
    const checkoutTotal = calcOrderTotal(cart, cues);
    assert.equal(checkoutTotal, expected);
}); 
