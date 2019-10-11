import { findById } from '../common/utils.js';
import cueShop from '../data/store.js';
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
    
    const usd = cue.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cue.id;
    button.addEventListener('click', () => {
        cueShop.orderCue(cue.id);
        let cartItems = localStorage.getItem('cart');
        console.log(cartItems);
        let cart;
        if (cartItems) {
            cart = JSON.parse(cartItems);
            console.log('made it here');
        }
        else {
            cart = [];
            console.log('made cart');
        }
        console.log(cart);
        console.log('id', cue.id);
        let lineItem = findById(cart, cue.id);  
        if (!lineItem) {
            lineItem = {
                id: cue.id,
                quantity: 1
            };
            cart.push(lineItem);
        } 
        else {
            lineItem.quantity++;
        }
        cartItems = JSON.stringify(cartItems);
        localStorage.setItem('cart', cartItems);
        alert(`1 ${cue.name} added to cart`);
    });
    p.appendChild(button);
    li.appendChild(p);
    return li;
}
export default renderProduct;

