import renderProducts from '../src/renderProducts.js';

const test = QUnit.test;
// QUnit.module('Render Fruit');
QUnit.module('Renders Product');
test('renders a product', (assert) => {
    // arrange
    const peachauer = {
        
        code: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };

    const expected = '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3>J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="../assets/peachauer1400.jpg" alt="J.Pechauer Cues Limited Edition 50th Anniversary image"><p class="price">$1,500.00$1,500.00<button value="undefined">Add</button></p></li>';
   
       
    const dom = renderProducts(peachauer);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
