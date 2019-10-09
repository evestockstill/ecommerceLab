export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });




// import renderTableRow  from './render-table-row.js';
// import cues from '../data.js';
// import cart from '../data.js';

// const tableElement = document.querySelector('tboy');

// cart.forEach(cueOrder => {
//     renderTableRow(cues, cueOrder);
//     const cueIdFromOrder = cueOrder.id;
//     cues.forEach(cues => {
//         if(cues.id === cueIdFromOrder) {
//             const row = renderTableRow(cues, cueOrder),
//         }
//     })
// });
// tableElement.appendChild();