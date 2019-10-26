
import cues from '../data/cues.js';
import renderProducts from '../src/renderProducts.js';
const list = document.getElementById('cues');

cues.forEach(cue => {
    const dom = renderProducts(cue);
    list.appendChild(dom);
});



