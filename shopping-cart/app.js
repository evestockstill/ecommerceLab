import renderTableRow from './render-table-row.js';
import cues from '../data.js';
import cart from '../data.js';
import { makePrettyCurrency } from '';

const tableElement = document.querySelector('tbody');
const cueIdFromOrder = cueOrder.id;
let cartTotal = 0;
cart.forEach(cueOrder => {
    cues.forEach(cues => {
        let cueTotal;
        if (cues.id === cueIdFromOrder) {
            const row = renderTableRow(cues, cueOrder);
            tableElement.appendChild(row);
            cueTotal = cue.price * cueOrder.quantity;
            cartTotal = cartTotal + cueTotal;
        }
    });
    const totalCell = document.getElementById('order-total-cell');
    totalCell.textContent = makePrettyCurrency(cartTotal);
});