import { makePrettyCurrency } from '../common/utils.js';
const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};
export default (cue, order) => {
    const lineItem = document.createElement('tr');
    const totalPrice = order.quantity * cue.price;
    const prettyPrice = makePrettyCurrency(cue.price);
    const prettyTotal = makePrettyCurrency(totalPrice);
    const columnOne = makeTd(cue.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal); 
    lineItem.appendChild(columnOne);
    lineItem.appendChild(columnTwo);
    lineItem.appendChild(columnThree);
    lineItem.appendChild(columnFour);
    return lineItem;
};
    