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
    

    const p = document.createElement('p');
    p.className = 'price';
    
    const usd = cue.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cue.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProduct;

