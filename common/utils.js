import  renderTableRow  from './render-table-row.js';

import cues, { cart } from '../data.js';

const tableElement = document.querySelector('tboy');

cart.forEach(cueOrder => {
    renderTableRow(cues, cueOrder);
    const cueIdFromOrder = cueOrder.id;
    cues.forEach(cues => {
        if(cues.id === cueIdFromOrder) {
            const row = renderTableRow(cues, cueOrder),
        }
    })
});
tableElement.appendChild();