import cart from '../data/cart.js';
import cues from '../data/cues.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import toUSD from '../common/utils.js';
import renderTableRow from './render-table-row.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const cue = findById(cues, lineItem.id);
    const dom = renderTableRow(lineItem, cue);

    tbody.appendChild(dom);
}
const orderTotal = calcOrderTotal(cart, cues);
orderTotalCell.textContent = toUSD(orderTotal);