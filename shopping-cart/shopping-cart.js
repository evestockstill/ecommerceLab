import cueShop from '../data/store.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const rackItBtn = document.getElementById('rack-it');

const cart = cueShop.getCart();
for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const cue = cueShop.getProduct(lineItem.id);
    const dom = renderLineItem(lineItem, cue);
    tbody.appendChild(dom);
}
if (cart.length === 0) {
    rackItBtn.disabled = true;
}
else {
    rackItBtn.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert(`Order placed:` + JSON.stringify(cart, true, 2));
        window.location = 'cueShop';
    });
}