import { findById } from '../common/utils.js';
function renderProducts(cues) {
    const li = document.createElement('li');
    li.className = cues.category;
    li.title = cues.description;

    const h3 = document.createElement('h3');
    h3.textContent = cues.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + cues.image;
    img.alt = cues.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    const usd = cues.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    p.textContent = usd;
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cues.id;
    p.appendChild(button);
    button.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }
        let lineItem = findById(cart, cues.id);
        if (!lineItem) {
            lineItem = {
                id: cues.id,
                quantity: 1
            };
            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);
        alert('1 ' + cues.name + ' added to cart');
    });
    li.appendChild(p);
    return li;
}
export default renderProducts;

