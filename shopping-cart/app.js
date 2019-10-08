import renderTableRow from './render-table-row.js';

import cues, { cart } from '../data.js';
import { makePrettyCurrency } from './render-table-row.js'

const tableElement = document.querySelector('tboy');
const cueIdFromOrder = cueOrder.id;

cart.forEach(cueOrder => {
    renderTableRow(cue, cueOrder);
    cues.forEach(cues => {
        if (cues.id === cueIdFromOrder) {
            const row = renderTableRow(cues, cueOrder),
        }
    })
});
tableElement.appendChild();

cart.forEach(cueOrder => {
    let cartTotal = 0;
})