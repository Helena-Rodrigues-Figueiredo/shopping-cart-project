const removeProducts = document.querySelector('.empty-cart');
const olElements = document.querySelector('ol');
let total = 0;
const paragraph = document.querySelector('.total-price');

const sum = async () => {
  const arrayOl = document.querySelectorAll('li');
  total = 0;
  arrayOl.forEach((element) => {
    const price = parseFloat(element.innerText.split('$')[1]);
    total += price;
  });
  paragraph.innerText = `Subtotal: ${total.toFixed(2)}`;
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(olElements);
  sum();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addToCart = async (event) => {
  const productId = event.target.parentNode.firstChild.innerText;
  const product = await fetchItem(productId);
  const { id, title, price } = product;
  
  const createElement = createCartItemElement({
    sku: id,
    name: title,
    salePrice: price,
  });
  const elementoClasse = document.querySelector('.cart__items');
  elementoClasse.appendChild(createElement);
  saveCartItems(olElements);
  event.addEventListener('click', sum());
};

function createProductItemElement({ sku, name, image, value }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__value', value));
  section
    .appendChild(
      createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
    )
    .addEventListener('click', addToCart);

  return section;
}

const insertElements = async () => {
  const { results } = await fetchProducts('computador');

  const clean = document.querySelector('.items');
  clean.innerHTML = '';

  results.forEach((product) => {
    const { id, title, thumbnail, price } = product;
    const createElement = createProductItemElement({
      sku: id,
      name: title,
      image: thumbnail,
      value: `R$ ${price.toFixed(2)}`,
    });

    const elementClass = document.querySelector('.items');
    elementClass.appendChild(createElement);
  });
};

const cleanCart = async () => {
  const elementOl = document.querySelector('ol');
  elementOl.innerHTML = '';
  saveCartItems(olElements);
  sum();
};

removeProducts.addEventListener('click', cleanCart);

window.onload = () => {
  insertElements();
  olElements.innerHTML = getSavedCartItems();
  const arrayOl = document.querySelectorAll('li');
  arrayOl.forEach((elemento) => {
    elemento.addEventListener('click', cartItemClickListener);
  });
  sum();
};
