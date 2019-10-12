import renderProduct from '../products/renderProducts.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const test = QUnit.test;

QUnit.module('Renders Products');
test('renders a product', (assert) => {
    const peachauer = {
        
        id: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
    const expected = '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3 class="product">J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="../assets/peachauer1400.jpg" alt="J.Pechauer Cues Limited Edition 50th Anniversary image"><p class="producut-info">Limited Edition Ebony Cue with Simulated Ivory</p><p class="price">$1,500.00<button value="peachauer">Add</button></p></li>';
    const dom = renderProduct(peachauer);
    const html = dom.outerHTML;
    assert.equal(html, expected);
});
test('renders a table row', assert => {
    const peachauer = {
        id: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
    const peachauerOrder = {
        id: 'peachauer',
        quantity: 10,
    };
    const expected = '<tr><td>J.Pechauer Cues Limited Edition 50th Anniversary</td><td>10</td><td>$1,500.00</td><td>$15,000.00</td></tr>';

    const cueElementTr = renderTableRow(peachauer, peachauerOrder);
    const stringHtmlOfCueElement = cueElementTr.outerHTML;
    assert.deepEqual(stringHtmlOfCueElement, expected);
});