import store from '../data/store';
import { toUSD } from '../shopping-cart/register.js';
function renderProduct(cue) {
    const li = document.createElement('li');
    li.className = cue.category;
    li.title = cue.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = cue.name;
    li.appendChild(h3);
    
    const img = document.createElement('img');
    img.src = '../assets/' + cue.image;
    img.alt = cue.name + ' image';
    li.appendChild(img);
    
    const description = document.createElement('p');
    description.textContent = cue.description;
    li.appendChild(description);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = toUSD(cue.price);
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cue.id;
    p.appendChild(button);
    
    const addButton = document.createElement('button');
    button.textContent = 'Add';
    button.value = cue.id;
    button.addEventListener('click', () => {
        store.orderCue(cue.id);
    });
    p.appendChild(addButton);

    li.appendChild(p);

    return li;
}

export default renderProduct;

