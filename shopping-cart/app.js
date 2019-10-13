import renderTableRow from './render-table-row.js';
import cues from '../data/cues.js';
import { cart } from '../data/cart.js';
import { toUSD } from '../common/utils.js';

// const pageLinks = document.querySelector('page_links');
// const navBtn = document.getElementById('button');
// navBtn.addEventListener('click', function() {
//     let rotate = pageLinks.classList.contains('hide');
//     if (rotate) {
//         pageLinks.classList.remove('hide');
//         navBtn.classList.remove('unhide');
//     }
//     else {
//         pageLinks.classList.add('hide');
//         navBtn.classList.add('unhide');
//     }
// });


const tableElement = document.querySelector('tbody');

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
