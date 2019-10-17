
import cues from '../data/cues.js';
import renderProducts from '../src/renderProducts.js';
const list = document.getElementById('cues');

cues.forEach(cue => {
    const items = renderProducts(cue);
    list.appendChild(items);
});



