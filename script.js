// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchItem } = require("./helpers/fetchItem");

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

function cartItemClickListener() {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const adicionaAoCarrinho = async (event) => {
  const teste = event.target.parentNode.firstChild.innerText;
  const elementos = await fetchItem(teste);
  const { id, title, price } = elementos;
  const criaElemento = createCartItemElement({ sku: id, name: title, salePrice: price });
  const elementoClasse = document.querySelector('.cart__items');
  elementoClasse.appendChild(criaElemento);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', adicionaAoCarrinho);

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const insereElementos = async () => {
  const elementos = await fetchProducts('computador');
  elementos.forEach((elemento) => {
    const { id, title, thumbnail } = elemento;
    const criaElemento = createProductItemElement({ sku: id, name: title, image: thumbnail });
    const elementoClasse = document.querySelector('.items');
    elementoClasse.appendChild(criaElemento);
  });
};

insereElementos();
adicionaAoCarrinho();

window.onload = () => { };
