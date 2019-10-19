import cues from '../data/cues.js';
import toUSD from '../common/utils.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('rack-it');

const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}
// const lineItem = {
//     id: peachuer,
//     quantity: 1
// };

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const cue = findById(cues, lineItem.id);
    const dom = renderLineItem(lineItem, cue);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, cues);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = 'products/index.html';
    });
}