import { toUSD } from '../common/utils.js';
const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};
export default (cue, order) => {
    const tableRow = document.createElement('tr');
    const totalPrice = order.quantity * cue.price;
    const prettyPrice = toUSD(cue.price);
    const prettyTotal = toUSD(totalPrice);
    const columnOne = makeTd(cue.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal); 
    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);
    
   
    return tableRow;
};
    
// export default (cue, order) => {
//     const tableRow = document.createElement('tr');
//     const totalPrice = order.quantity * cue.price;
//     const prettyPrice = toUSD(cue.price);
//     const prettyTotal = toUSD(totalPrice);
//     const columnOne = makeTd(cue.name);
//     const columnTwo = makeTd(order.quantity);
//     const columnThree = makeTd(prettyPrice);
//     const columnFour = makeTd(prettyTotal); 
//     tableRow.appendChild(columnOne);
//     tableRow.appendChild(columnTwo);
//     tableRow.appendChild(columnThree);
//     tableRow.appendChild(columnFour);
   
//     return tableRow;
// };
    