import renderProducts from '../src/renderProducts.js'

const test = QUnit.test;
// QUnit.module('Render Fruit');

test('renders a product',renderProducts (assert) => {
    // arrange
    const peachauer = {
        code: 'peachauer',
        name: 'J.Pechauer Cues Limited Edition 50th Anniversary',
        image: 'peachauer1400.jpg',
        description: 'Limited Edition Ebony Cue with Simulated Ivory',
        category: 'playing-cue',
        price: 1500,
    };
    const expected = <li
   
        const expected= '<li class="playing-cue" title="Limited Edition Ebony Cue with Simulated Ivory"><h3>J.Pechauer Cues Limited Edition 50th Anniversary</h3><img src="assets/peachauer1400.jpg" alt="black pool cue"><p class="price">$1500<button value="peachauer">Add</button></p></li>';

    const dom = renderProducts(peachauer);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
