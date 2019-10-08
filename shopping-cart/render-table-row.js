const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};
export const makePrettyCurrency = (number) =>
number.toLocaleString('en-US', {
    style: 'currency'
    currency 'USD'
}):

export default (cue, order) => {
const tableRow = document.createElement('tr')
    const columnOne = makeTd('cue.name');
    const columnTwo = makeTd('order.quantity');
    const columnThree = makeTd('cue.price');
    const totalPrice = makeTd('order.quantity * cue.price');
    const prettyPrice = cue.Pr.toLocaleString ('en-us', {
        style: 'currency',
        currency: 'USD',
        const prettyTotal =

    });
    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);
        return tableRow;
};
const totalCuePrice = (cue, quantity) =>
cue.price * quantity;
const cartTotal = (cue, cart) => {

}