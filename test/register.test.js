// import cues from '../data/cart.js';
// import cart from '../data/cart.js';
// import renderProducts from '../products/renderProducts.js';
// import renderTableRow from '../shopping-cart/render-table-row.js';
// import { findProduct, calcLineTotal, calcOrderTotal } from '../src/register.js';
// const test = QUnit.test;

// QUnit.module('Register');

// test('Find product by id', assert => {
//     // arrange
//     const id = 'peachauer';
//     const expected = {
//         id: 'predator',
//         name: 'Predator P3 Metallic Black With Wrap with 3rd Generation Shaft',
//         image: 'predator900.jpg',
//         description: 'Uni-Loc Quick Release Stainless Steel Joint Leather Luxe Wrap',
//         category: 'playing-cue',
//         price: 900,
//     };

//     // act
//     const foundProduct = findProduct(cues, id);

//     // assert
//     assert.deepEqual(foundProduct, expected);
// });

// test('calculate line total', (assert) => {
//     // arrange
//     const quantity = 1;
//     const price = 900;
//     const expected = 900;
//     const total = calcLineTotal(quantity, price);

//     assert.equal(total, expected);
// });

// // test('calculate order total', (assert) => {
// //     // arrange
// //     const expected = 22.30;

// //     // act
// //     const orderTotal = calcOrderTotal(order, fruits);

// //     // assert
// //     assert.equal(orderTotal, expected);
// // });