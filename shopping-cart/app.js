import renderTableRow from './render-table-row.js';
import cues from '../data/cues.js';
import { cart } from '../data/cart.js';
import { toUSD } from '../common/utils.js';

const tableElement = document.querySelector('tbody');
// const cueIdFromOrder = cueOrder.id;

let cartTotal = 0;
cart.forEach(cueOrder => {
    cues.forEach(cue => {
        let cueTotal;
        if (cue.id === cueOrder.id) {
            const row = renderTableRow(cue, cueOrder);
            tableElement.appendChild(row);
            cueTotal = cue.price * cueOrder.quantity;
            cartTotal = cartTotal + cueTotal;
        }
    });
    const totalCell = document.getElementById('order-total-cell');
    totalCell.textContent = toUSD(cartTotal);
});