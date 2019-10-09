import renderProduct from '../products/renderProducts.js';
// import renderTableRow from '../shopping';

const test = QUnit.test;
// QUnit.module('Render Fruit');
QUnit.module('Renders Products');
test('renders a product', (assert) => {
    // arrange
    const peachauer = {
        
        id: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
    const expected = '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3>J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="../assets/peachauer1400.jpg" alt="J.Pechauer Cues Limited Edition 50th Anniversary image"><p class="price">$1,500.00<button value="peachauer">Add</button></p></li>';
    const dom = renderProduct(peachauer);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
    