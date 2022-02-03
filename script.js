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

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function addClick(event) {
  console.log(event.target);
  const itemID = event.target.document.querySelector('.item__sku').innerHTML;
  return itemID;
}

window.onload = () => {
  fetchProducts();
  fetchItem();
};

const itemsBtn = document.querySelectorAll('.item__add');
itemsBtn.forEach((element) => element.addEventListener('click', addClick));
console.log(itemsBtn);

fetchProducts('computador').then((elements) => {
  elements.results.forEach((elem) => {
      const resultado = {
        sku: elem.id,
        name: elem.title,
        image: elem.thumbnail,
      };
      console.log(resultado);

      const products = document.querySelector('.items');
      products.appendChild(createProductItemElement(resultado));
    });
});

// button

fetchItem('MLB1341706310').then((element) => {
  console.log(element);
  const itemResult = { sku: element.id, name: element.title, salePrice: element.price };

  const cartItems = document.querySelector('.cart__items');
  cartItems.appendChild(createCartItemElement(itemResult));
});
