import toUSD from '../common/utils.js';

function renderLineItem(lineItem, cue) {
    const tr = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = cue.name;
    tr.appendChild(nameCell);
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);
    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(cue.price);
    tr.appendChild(priceCell);
    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * cue.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}
export default renderLineItem;