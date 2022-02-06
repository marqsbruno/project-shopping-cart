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

/* não utilizei a função abaixo, a lógica foi feita na getSkuBtn;
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
 */
const cartItems = document.querySelector('.cart__items');

function cartItemClickListener(event) {
  const itemCart = event.target;
  cartItems.removeChild(itemCart);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const productsADD = async () => {
  const addComputers = await fetchProducts('computador');
  addComputers.results.forEach((elem) => {
    const resultado = {
      sku: elem.id,
      name: elem.title,
      image: elem.thumbnail,
    };
    const products = document.querySelector('.items');
    products.appendChild(createProductItemElement(resultado));
  });
};

// req 2
const addCart = async (itemAdd) => {
  const getData = await fetchItem(itemAdd);
  const itemResult = { sku: getData.id, name: getData.title, salePrice: getData.price };
  cartItems.appendChild(createCartItemElement(itemResult));
};

const getSkuBtn = async () => {
  const itemsBtn = document.querySelectorAll('.item__add');
  console.log(itemsBtn);
  itemsBtn.forEach((element) => element.addEventListener('click', (event) => {
    const ITEM = event.target.parentElement;
    const itemSku = ITEM.querySelector('span.item__sku').innerText;
    addCart(itemSku);
    console.log(itemSku);
  }));
};

// req 3
const emptyBtn = document.querySelector('.empty-cart');
emptyBtn.addEventListener('click', () => { 
  cartItems.innerHTML = '';
});

window.onload = async () => {
  await fetchProducts();
  await productsADD();
  await getSkuBtn();
  await fetchItem();
};
