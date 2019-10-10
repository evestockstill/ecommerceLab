import cues from '../data/cues.js';
import { cart } from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('utility');

test('Find product by id', assert => {
    const id = 'peachauer';
    const expected = 'J.Pechauer Cues Limited Edition 50th Anniversary';
    const foundCue = findById(cues, id);
    assert.ok(foundCue);
    assert.deepEqual(foundCue.name, expected);
});
test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;
    const foundFruit = findById(cues, id);
    assert.equal(foundFruit, expected);
});
test('calculate line total', (assert) => {
    const quantity = 1;
    const price = 900;
    const expected = 900;
    const total = calcLineTotal(quantity, price);
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    const expected = 44000;
    const checkoutTotal = calcOrderTotal(cart, cues);
    assert.equal(checkoutTotal, expected);
    console.log('checkout', expected);
}); 
// export function calcOrderTotal(cart, cues) {
//     let orderTotal = 0;
//     for (let i = 0; i < cart.length; i++) {
//         const lineItem = cart[i];
//         const foundCue = findById(cues, lineItem.id);
//         const lineTotal = calcLineTotal(lineItem.quantity, foundCue.price);
//         orderTotal += lineTotal;
//     }
//     return roundCurrency(orderTotal);
// }