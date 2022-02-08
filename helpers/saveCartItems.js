const saveCartItems = (savedItems) => {
 localStorage.setItem('cartKey', savedItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
