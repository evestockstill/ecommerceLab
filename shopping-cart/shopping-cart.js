import cart from '../data/cart.js';
import cues from '../data/cues.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const fruit = findById(cues, lineItem.id);
    const dom = renderLineItem(lineItem, fruit);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, cues);
orderTotalCell.textContent = toUSD(orderTotal);