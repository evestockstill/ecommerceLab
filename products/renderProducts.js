import cueShop from '../data/store.js';
import { makePrettyCurrency } from '../common/utils.js'
function renderProduct(cue) {
    const li = document.createElement('li');
    li.className = cue.category;
    li.title = cue.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = cue.name;
    h3.className = 'product';
    li.appendChild(h3);
    
    const img = document.createElement('img');
    img.src = '../assets/' + cue.image;
    img.alt = cue.name + ' image';
    li.appendChild(img);
    
    const description = document.createElement('p');
    description.textContent = cue.description;
    description.className = 'producut-info';
    li.appendChild(description);

    const p = document.createElement('p');
    p.className = 'price';
    
    const usd = makePrettyCurrency(cue.price);
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cue.id;
    button.addEventListener('click', () => {
        cueShop.orderCue(cue.id);
    });
    //     // cue.orderCue(cue.id);
    //     let cartItems = localStorage.getItem('cart');
    //     cartItems = JSON.stringify(cartItems);
    //     localStorage.setItem(cartItems);
    //     alert(`1 ${cue.name} added to cart`);
    // });
    p.appendChild(button);
    li.appendChild(p);
    return li;
}
export default renderProduct;

