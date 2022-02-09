const saveCartItems = (savedItems) => {
 localStorage.setItem('cartItems', savedItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
